import { CommonModule } from '@angular/common';
import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewEncapsulation,
    OnChanges,
    ChangeDetectionStrategy,
    SimpleChanges,
} from '@angular/core';
//
// Lernender/Core
//
import { Library } from '@lernender/core';
//
// ln-icon
//
@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'ln-icon',
    templateUrl: 'ln-icon.html',
    styleUrls: ['ln-icon.scss'],
})
export class LnIcon implements OnChanges {
    @Input() public disabled: boolean;
    @Input() public hidden: boolean;
    @Input() public active: boolean;
    @Input() public style: object;
    @Input() public color: string;
    @Input() public type: string;
    @Input() public name: string;
    @Input() public title: string;
    @Input() public padLeft: boolean;
    @Input() public padRight: boolean;
    @Output() public onClick: EventEmitter<any> = new EventEmitter();

    //
    // Public Variables
    //
    public classList: string = '';

    //
    // Constructor
    //
    constructor() {
        this.type = 'fa-solid';
        this.active = false;
        this.name = '';
        this.color = '';
        this.title = '';
        this.disabled = false;
        this.hidden = false;
        this.style = {};
        this.padLeft = false;
        this.padRight = false;
    }

    //
    // OnClick
    //
    public handleOnClick(event: MouseEvent) {
        event.stopPropagation();
        //event.preventDefault();
        if (Library.isDefined(this.onClick)) {
            this.onClick.emit(event);
        }
    }

    //
    // ngOnChange
    //
    public ngOnChanges(changes: SimpleChanges): void {
        if (changes['name']?.currentValue) {
            this.classList = `${this.type} ${this.name} ${this.color}`;
        }
    }
}
