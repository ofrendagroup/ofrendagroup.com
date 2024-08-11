import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
//
// Components
//
import { LnIcon } from '@components/ln-icon/ln-icon';
//
// Library
//
import { Icon, Library } from '@lernender/core';

@Component({
    standalone: true,
    selector: 'ln-icon-toolbar',
    imports: [CommonModule, LnIcon],
    templateUrl: 'ln-icon-toolbar.html',
    styleUrls: ['ln-icon-toolbar.scss'],
})
export class LnIconToolBar implements OnInit {
    @Input() public items: Icon[];
    @Input() public hidden: boolean;
    @Input() public disabled: boolean;
    @Output() public onClick: EventEmitter<Icon> = new EventEmitter();
    //
    // constructor()
    //
    constructor() {
        this.items = [];
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
    public handleOnClick(item: Icon) {
        if (Library.isDefined(this.onClick)) {
            this.onClick.emit(item);
        }
    }
    //
    // ngOnChange
    //
    public ngOnChanges(): void {}
}
