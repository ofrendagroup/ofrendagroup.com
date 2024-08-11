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
import { Guid, Library } from '@lernender/core';
//
// ln-svg
//
@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'ln-svg',
    templateUrl: 'ln-svg.html',
    styleUrls: ['ln-svg.scss'],
})
export class LnSvg implements OnChanges {
    @Input() public disabled: boolean;
    @Input() public hidden: boolean;
    @Input() public color: string;
    @Input() public name: string;
    @Input() public title: string;
    @Input() public padLeft: boolean;
    @Input() public padRight: boolean;
    @Output() public onClick: EventEmitter<any> = new EventEmitter();

    //
    // Public Variables
    //
    public id: string = Guid.create().toString();

    //
    // Constructor
    //
    constructor() {
        this.name = 'Amplify';
        this.color = '';
        this.title = '';
        this.disabled = false;
        this.hidden = false;
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
        
    }
}
