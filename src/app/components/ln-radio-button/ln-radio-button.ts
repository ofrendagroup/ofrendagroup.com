import {
    Component,
    Input,
    Output,
    OnChanges,
    EventEmitter,
    ViewEncapsulation,
    OnInit,
    SimpleChanges,
    forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LnCdkBase } from '@components/ln-cdk-base/ln-cdk-base';
import { Library, Response, Guid } from '@lernender/core';
import { deepClone } from '@library/scoli-fusion.library';
import { Observable } from 'rxjs';

@Component({
    standalone: true,
    selector: 'ln-radio-button',
    templateUrl: './ln-radio-button.html',
    styleUrls: ['ln-radio-button.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: LnRadioButton, //forwardRef(() => LnRadioButton),
            multi: true,
        },
    ],
    encapsulation: ViewEncapsulation.None,
})
export class LnRadioButton extends LnCdkBase implements OnInit {
    @Input() public disabled: boolean;
    @Input() public value: any;
    @Input() public label: string;
    @Input() public textField: string;
    @Input() public valueField: string;
    @Input() public chip: boolean = false;
    @Input() public readonly: boolean = false;
    @Output() public valueChange: EventEmitter<any> = new EventEmitter();
    @Output() public onClick: EventEmitter<any> = new EventEmitter();
    //
    // Public Variables
    //
    public control: string = Guid.create().toString();
    public items: any[] = [];
    //
    // Constructor
    //
    constructor() {
        super();
        this.disabled = false;
        this.label = '';
        this.textField = 'name';
        this.valueField = 'id';
    }

    //
    // handleClick()
    //
    public handleClick($event: MouseEvent, item: any) {
        $event.preventDefault();
        $event.stopPropagation();
        this.value = item[this.valueField];
        if (Library.isDefined(this.valueChange)) {
            this.valueChange.emit(this.value);
        }
    }
    /**
     * ngOnInit()
     */
    public ngOnInit() {}

    //
    // ngOnChanges
    //
    public ngOnChanges(changes: SimpleChanges) {
        //
        // Listen for data changes
        //
        if (Library.isDefined(changes['data'])) {
            if (Library.isDefined(changes['data'].currentValue)) {
                /**
                 * Register Data Event Listener
                 */
                this.registerDataEventHandler((response: any) => {
                    if (!Library.isNullOrUndefined(response)) {
                        //
                        // Clear Array
                        //
                        this.items.splice(0, this.items.length);
                        if (Library.hasOwnProperty(response, 'data')) {
                            this.items = deepClone(response?.data);
                        } else if (Library.isArrayWithLength(response)) {
                            this.items = deepClone(response);
                        }
                    }
                });
            }
        }
    }
}
