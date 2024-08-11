import { CommonModule } from "@angular/common";
import {
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { LnIcon } from "@components/ln-icon/ln-icon";

@Component({
  standalone: true,
  selector: "ln-feature-not-found",
  imports: [CommonModule, LnIcon],
  templateUrl: "ln-feature-not-found.html",
  styleUrls: ["ln-feature-not-found.scss"],
})
export class LnFeatureNotFound implements OnInit {
  @Input() public label!: string;
  @Input() public name: string;
  //
  // Public Variables
  //

  //
  // constructor()
  //
  constructor() {
    this.name = "";
  }
  //
  // ngOnInit()
  //
  public ngOnInit() {}

  //
  // ngOnChange
  //
  public ngOnChanges(): void {
  }
}
