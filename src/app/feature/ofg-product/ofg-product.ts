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
    selector: 'ofg-product',
    imports: [CommonModule, LnBanner],
    templateUrl: './ofg-product.html',
    styleUrl: './ofg-product.scss',
})
export class OfgProduct {
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
