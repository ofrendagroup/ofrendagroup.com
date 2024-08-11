import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
//
// AppStore
//
import { AppStore } from '@store/app.store';
//
// Components
//
import { LnBanner } from '@components/ln-banner/ln-banner';

@Component({
    standalone: true,
    selector: 'ofg-home',
    imports: [CommonModule, LnBanner],
    templateUrl: './ofg-home.html',
    styleUrl: './ofg-home.scss',
})
export class OfgHome {
    //
    // Public Variables
    //
    public readonly store = inject(AppStore);

    //
    // Private Variables
    //

    //
    // Constructor
    //
    public constructor() {}
    //
    // ngOnInit
    //
    public ngOnInit(): void {}
}
