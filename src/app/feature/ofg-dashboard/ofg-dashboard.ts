import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
    selector: 'ofg-dashboard',
    imports: [RouterOutlet, LnBanner],
    templateUrl: './ofg-dashboard.html',
    styleUrl: './ofg-dashboard.scss',
})
export class OfgDashboard {
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
