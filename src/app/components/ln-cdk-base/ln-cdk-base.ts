import { Component, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Guid, Library } from '@lernender/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'ln-cdk-base',
  templateUrl: './ln-cdk-base.html',
  encapsulation: ViewEncapsulation.None,
})
export class LnCdkBase implements OnDestroy {
  @Input() public hidden: boolean;
  @Input() public style: object;
  @Input() public data: Observable<any> | undefined;
  //
  // Public Variables
  //
  public uid: string;
  //
  // Private Variables
  //
  private subscription: Subscription | undefined;
  //
  // Constructor
  //
  constructor() {
    this.uid = Guid.create().toString();
    this.hidden = false;
    this.style = {};
  }
  //
  // hasStyles
  //
  public hasStyles() {
    return Library.isObject(this.style);
  }
  //
  // hasDataEventSubscription
  //
  public hasSubscription() {
    return Library.isDefined(this.subscription);
  }
  //
  // hasDataEventHandler
  //
  public hasData() {
    return Library.isDefined(this.data);
  }

  //
  // ngOnDestroy
  //
  public ngOnDestroy() {
    if (this.hasSubscription()) {
      this.subscription?.unsubscribe();
    }
  }

  //
  // registerDataEventHandler
  //
  protected registerDataEventHandler(cb: Function) {
    if (this.hasData()) {
      if (this.hasSubscription()) {
        this.subscription?.unsubscribe();
      }
      if (Library.isFunction(this.data?.subscribe)) {
        this.subscription = this.data?.subscribe((event: any) => {
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
