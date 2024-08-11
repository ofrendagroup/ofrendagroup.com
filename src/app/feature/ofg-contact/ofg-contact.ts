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
    selector: 'ofg-contact',
    imports: [CommonModule, LnBanner],
    templateUrl: './ofg-contact.html',
    styleUrl: './ofg-contact.scss',
})
export class OfgContact {
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
