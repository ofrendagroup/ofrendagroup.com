import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
//
// Components
//

//
// Library
//
import { Action, Library } from '@lernender/core';
import { Menu } from '@model/menu';

@Component({
    standalone: true,
    selector: 'ln-menu',
    imports: [CommonModule],
    templateUrl: 'ln-menu.html',
    styleUrls: ['ln-menu.scss'],
})
export class LnMenu implements OnInit {
    @Input() public menu: Menu[];
    @Input() public hidden: boolean;
    @Input() public disabled: boolean;
    @Output() public onClick: EventEmitter<Menu> = new EventEmitter();
    //
    // constructor()
    //
    constructor() {
        this.menu = [];
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
    public handleOnClick(item: Menu) {
        if (Library.isDefined(this.onClick)) {
            this.onClick.emit(item);
        }
    }
    //
    // ngOnChange
    //
    public ngOnChanges(): void {}
}
