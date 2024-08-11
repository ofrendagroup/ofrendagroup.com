import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Action } from '@lernender/core';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  selector: 'ln-hyperlink',
  templateUrl: 'ln-hyperlink.html',
  styleUrls: ['ln-hyperlink.scss'],
})
export class LnHyperLink implements OnInit{
  @Input() public item: Action | undefined;  
  @Output() public onClick: EventEmitter<Action> = new EventEmitter();

  //
  // constructor
  //
  constructor() {
  }

  public ngOnInit() {

  }
  //
  // handleClick
  //
  public handleClick(event: Event) {
    if (this.onClick) {
      event.preventDefault();
      this.onClick.emit(this.item);
    }
  }
}
