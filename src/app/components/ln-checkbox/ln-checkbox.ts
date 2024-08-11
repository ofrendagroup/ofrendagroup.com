import { Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Library } from '@lernender/core';

@Component({
    standalone: true,
    selector: 'ln-checkbox',
    templateUrl: 'ln-checkbox.html',
    styleUrls: ['ln-checkbox.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => LnCheckBox),
            multi: true,
        },
    ]
})
export class LnCheckBox implements ControlValueAccessor {
    @Input()
    get value(): boolean {
        return this._value;
    }
    set value(v: boolean) {
        this.setIconType();
        // if (v !== this._value) {
        this._value = v;
        this.onChange(v);
        //}
    }
    @Input() public label: string;
    @Input() public indeterminate: boolean;
    @Input() public disabled!: boolean;
    @Input() public hidden!: boolean;
    @Input() public visibility: boolean;
    @Input() public style!: object;
    @Output() public onClick: EventEmitter<boolean> = new EventEmitter();

    public type!: string;
    public name!: string;
    public iconStyle: object;
    /**
     * Private Variables
     */
    private _value!: boolean;
    //
    // constructor()
    //
    constructor() {
        this.value = false;
        this.label = '';
        this.visibility = true;
        this.indeterminate = false;
        this.iconStyle = {
            fontSize: '18px',
        };
    }

    ngOnInit() {
        this.setIconType();
    }

    public writeValue(value: boolean) {
        this._value = value;
        this.onChange(this._value);
    }

    public onChange = (_: any) => {};
    public onTouched = () => {};
    public registerOnChange(fn: (_: any) => void): void {
        this.onChange = fn;
    }
    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
    //
    // handleClick()
    //
    public handleClick($event: MouseEvent) {
        $event.preventDefault();
        $event.stopPropagation();
        this.value = !this.value;
        if (Library.isDefined(this.onClick)) {
            this.onClick.emit(this.value);
        }
    }

    /**
     * isEmpty()
     * Determines if the value property is deemed as empty.
     */
    public isEmpty(): boolean {
        return !this.value;
    }
    /**
     * empty()
     * Set the value property to an empty state.
     */
    public empty(): void {
        this.writeValue(false);
    }

    //
    // setIconType()
    //
    private setIconType() {
        if (this._value) {
            this.type = 'fa-solid';
            this.name = 'square-check';
        } else {
            this.type = 'fa-regular';
            this.name = 'square';
        }
    }
}
