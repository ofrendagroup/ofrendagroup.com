import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
//
// @Lernender Library
//
import { Library } from '@lernender/core';
//
// ngrx/Store
//
import { Store } from '@ngrx/store';
import { IApplicationState } from '@store/index';
//
// Services
//
import { LnMessageService } from '@service/ln-common/ln-message.service';
//
// Models
//
import { Menu } from '@model/menu';
import { MenuItem } from '@model/menu-item';

@Component({
    standalone: true,
    selector: 'ln-context-menu',
    templateUrl: 'ln-context-menu.html',
    styleUrls: ['ln-context-menu.scss'],
})
export class LnContextMenu implements OnInit {
    @Input() public menu: Menu;
    @Input() public style: object;
    @Input() public hidden: boolean;
    @Input() public disabled: boolean;
    @Output() public onClick: EventEmitter<any> = new EventEmitter();
    //
    // Public Variables
    //

    //
    // constructor()
    //
    constructor(private store: Store<IApplicationState>, private messageService: LnMessageService) {
        this.style = {
            fontSize: '12px',
        };
        this.disabled = false;
        this.hidden = false;
        this.disabled = false;
        this.hidden = false;
    }
    //
    // ngOnInit()
    //
    public ngOnInit() {
    }
    //
    // OnClick
    //
    public handleOnClick($event: Event, item: MenuItem) {
        $event.stopPropagation();
        if (Library.isDefined(this.onClick)) {
            this.onClick.emit(item);
        }
    }
    //
    // ngOnChange
    //
    public ngOnChanges(changes: SimpleChanges): void {
        if (Library.isDefined(changes['menu'])) {
            if (Library.isDefined(changes['menu'].currentValue)) {

            }
        }
    }
}
