import { Component, Input, OnDestroy } from '@angular/core';
import { Library, Guid } from '@lernender/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'ln-grid-base',
  templateUrl: './ln-grid-base.html',
})
export class LnGridBase implements OnDestroy {
  @Input() public disabled: boolean;
  @Input() public hidden: boolean;
  @Input() public style: object;
  @Input('data') public data: Observable<any> | undefined;

  public uid: string;
  public dataEventSubscription: Subscription | undefined;

  constructor() {
    this.uid = Guid.create().toString();
    this.disabled = false;
    this.hidden = false;
    this.style = {};
  }

  public hasStyles() {
    return Library.isObject(this.style);
  }

  public hasDataEventSubscription() {
    return Library.isDefined(this.dataEventSubscription);
  }

  public hasData() {
    return Library.isDefined(this.data);
  }

  /**
   * ngOnDestroy()
   */
  public ngOnDestroy() {
    if (this.hasDataEventSubscription()) {
      this.dataEventSubscription?.unsubscribe();
    }
  }

  /**
   * registerDataEventHandler()
   * @param cb
   */
  protected registerDataEventHandler(cb: Function) {
    if (this.hasData()) {
      if (this.hasDataEventSubscription()) {
        this.dataEventSubscription?.unsubscribe();
      }
      if (this.hasData()) {
        if (Library.isFunction(this.data?.subscribe)) {
          this.dataEventSubscription = this.data?.subscribe((event) => {
            if (Library.isObject(event)) {
              if (Library.isFunction(cb)) {
                cb(event);
              }
            }
          });
        }
      }
    }
  }
}
