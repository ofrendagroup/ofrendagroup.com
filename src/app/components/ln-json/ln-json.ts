import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,

} from '@angular/core';
import { Library } from '@lernender/core';

@Component({
  standalone: true,
  selector: 'ln-json',
  templateUrl: 'ln-json.html',
  styleUrls: ['ln-json.scss'],
})
export class LnJson implements OnInit, OnChanges {
  @Input() data!: object;
  @Input() hidden: boolean = false;
  @Input() disabled: boolean = false;
  
  constructor() {
  }
  public ngOnInit() {}
  //
  // ngOnChanges()
  //
  public ngOnChanges(changes: SimpleChanges) {
    
    if (Library.isDefined(changes['data'])) {
      if (Library.isDefined(changes['data'].currentValue)) {
        }
    }
  }
}
