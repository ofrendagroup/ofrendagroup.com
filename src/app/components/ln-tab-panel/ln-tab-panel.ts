import {
  Component,
  QueryList,
  ContentChildren,
  Input,
  TemplateRef,
  EventEmitter,
  Output,
  AfterContentInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
//
// Library
//
import { Base, Library } from '@lernender/core';
//
// Import LnComponent
//
import { LnTab } from '@components/ln-tab/ln-tab';
//
// Component: LnTab()
//
@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'ln-tab-panel',
  templateUrl: './ln-tab-panel.html',
  styleUrls: ['./ln-tab-panel.scss'],
})
//
// LnTab
//
export class LnTabPanel implements AfterContentInit {
  @Input() title: string = 'Tab Panel';
  @Input() hidden: boolean = false;
  @Input() disabled: boolean = false;
  @Input() template: TemplateRef<any> | undefined;
  @Input() actionTemplate: TemplateRef<any> | undefined;
  @Output() public onTabChange: EventEmitter<any> = new EventEmitter();
  @ContentChildren(LnTab) public tabs: QueryList<LnTab> | undefined;
  //
  // ngAfterContentInit()
  //
  ngAfterContentInit(): void {
    //
    // Set the first tab that's labeled as active to active
    //
    const tab = this.tabs?.forEach((t: LnTab) => {
      t.active = t.active ? true: false
    });
  }
  //
  // onTabClick
  //
  public handleTab = (tab: LnTab) => {
    if (Library.isDefined(tab)) {
      this.tabs?.forEach((t: LnTab) => {
        t.active = t.id == tab.id
        t.hidden = !t.active;
      });
      this.onTabChange.emit({
        id: tab.id,
        label: tab.label
      });
    }
  };
}
