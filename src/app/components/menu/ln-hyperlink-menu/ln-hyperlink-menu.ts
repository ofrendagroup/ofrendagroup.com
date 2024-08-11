import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
//
// Components
//
import { LnHyperLink } from '@components/ln-hyperlink/ln-hyperlink';
//
// Library
//
import { Action, Library } from '@lernender/core';

@Component({
    standalone: true,
    selector: 'ln-hyperlink-menu',
    imports: [CommonModule, LnHyperLink],
    templateUrl: 'ln-hyperlink-menu.html',
    styleUrls: ['ln-hyperlink-menu.scss'],
})
export class LnHyperlinkMenu implements OnInit {
    @Input() public menu: Action[];
    @Input() public hidden: boolean;
    @Input() public disabled: boolean;
    @Output() public onClick: EventEmitter<Action> = new EventEmitter();
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
    public handleOnClick(item: Action) {
        if (Library.isDefined(this.onClick)) {
            this.onClick.emit(item);
        }
    }
    //
    // ngOnChange
    //
    public ngOnChanges(): void {}
}
