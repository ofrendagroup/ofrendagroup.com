import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { LnIcon } from '@components/ln-icon/ln-icon';

@Component({
    standalone: true,
    selector: 'ofg-feature-not-found',
    imports: [CommonModule, LnIcon],
    templateUrl: 'ofg-feature-not-found.html',
    styleUrls: ['ofg-feature-not-found.scss'],
})
export class OfgFeatureNotFound implements OnInit {
    @Input() public label!: string;
    @Input() public name: string;
    //
    // Public Variables
    //

    //
    // constructor()
    //
    constructor() {
        this.name = '';
    }
    //
    // ngOnInit()
    //
    public ngOnInit() {}

    //
    // ngOnChange
    //
    public ngOnChanges(): void {}
}
