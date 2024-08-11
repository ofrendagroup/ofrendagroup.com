import { CommonModule } from '@angular/common';
import {
  Component,
  Directive,
  Input,
  OnInit,
  AfterViewInit,
  ViewContainerRef,
  ViewChild,
  ElementRef,
} from '@angular/core';
//
// Libraries
//
import { Library } from '@lernender/core';
//
// Components
//
import { LnBanner } from '@components/ln-banner/ln-banner';
//
// Component: LnTab()
//
@Component({
  standalone: true,
  imports: [CommonModule, LnBanner],
  selector: 'ln-tab',
  templateUrl: './ln-tab.html',
  styleUrls: ['./ln-tab.scss'],
})
//
// LnTab
//
export class LnTab implements OnInit, AfterViewInit {
  @Input() style: object = {};
  //
  // Private
  //
  private _active: boolean = false;
  //
  
  // Hidden
  //
  @Input() set active(value: boolean) {
    this._active = value;
    if (Library.isDefined(this.viewRef)) {
      this.viewRef.element.nativeElement.style.display = this._active
        ? 'flex'
        : 'none';
    }
  }
  get active() {
    return this._active;
  }
  //
  // active
  //
  @Input() hidden: boolean = false;
  @Input() disabled: boolean = false;

  @Input() id: string | number = '';
  @Input() label: string = '';

  //
  // Constructor
  //
  constructor(private readonly viewRef: ViewContainerRef) {}
  //
  // ngOnInit()
  //
  ngOnInit(): void {}
  //
  // AfterView Init
  //
  ngAfterViewInit(): void {}
}
