import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  ElementRef,
  OnChanges,
} from '@angular/core';
import { Library } from '@lernender/core';

const DEFAULT_BUTTON_CLASS = 'ln-button btn-primary';

@Component({
  standalone: true,
  selector: 'ln-button',
  templateUrl: 'ln-button.html',
  styleUrls: ['ln-button.scss'],
})
export class LnButton implements OnInit, OnChanges {
  @Input() public disabled: boolean;
  @Input() public hidden: boolean;
  @Input() public style: object;
  @Output() public onClick: EventEmitter<any> = new EventEmitter();

  public type: string = DEFAULT_BUTTON_CLASS;

  //
  // Constructor
  //
  constructor(private element: ElementRef) {
    this.type = DEFAULT_BUTTON_CLASS;
    this.disabled = false;
    this.hidden = false;
    this.style = {};
  }

  /**
   * handleClick()
   */
  public handleClick($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    if (this.onClick) {
      this.onClick.emit($event);
    }
  }

  /**
   * ngOnInit()
   */
  public ngOnInit(): void {
    this.parseClassList();
  }

  public ngOnChanges(): void {
    this.parseClassList();
  }

  //
  //
  //
  private parseClassList(): void {
    const list = Array.from(this.element.nativeElement.classList) as string[];
    if (Library.isArrayWithLength(list)) {
      list.unshift('ln-button');
      this.type = list.join(' ');
    } else {
      this.type = DEFAULT_BUTTON_CLASS;
    }
  }
}
