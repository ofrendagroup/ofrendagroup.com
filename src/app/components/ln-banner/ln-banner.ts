import { CommonModule } from "@angular/common";
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { LnIcon } from "@components/ln-icon/ln-icon";
import { Library } from "@lernender/core";

@Component({
  standalone: true,
  selector: "ln-banner",
  imports: [CommonModule, LnIcon],
  templateUrl: "ln-banner.html",
  styleUrls: ["ln-banner.scss"],
})
export class LnBanner implements OnInit {
  @Input() public label!: string;
  @Input() public name: string;
  @Input() public style: object;
  @Input() public hidden: boolean;
  @Input() public disabled: boolean;
  @Input() public active: boolean;
  @Output() public onClick: EventEmitter<any> = new EventEmitter();
  //
  // Public Variables
  //
  public classList: string = "";
  //
  // constructor()
  //
  constructor() {
    this.name = "";
    this.style = {
      fontSize: '12px'
    };
    this.active = false;
    this.disabled = false;
    this.hidden = false;
    this.disabled = false;
    this.hidden = false;
  }
  //
  // ngOnInit()
  //
  public ngOnInit() {}
  //
  // OnClick
  //
  public handleOnClick($event: Event) {
    if (Library.isDefined(this.onClick)) {
      this.onClick.emit($event);
    }
  }
  //
  // ngOnChange
  //
  public ngOnChanges(): void {
    this.classList = `ln-banner ${this.name}`;
  }
}
