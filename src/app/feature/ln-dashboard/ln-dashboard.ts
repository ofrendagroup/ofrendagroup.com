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
    selector: 'ln-dashboard',
    imports: [RouterOutlet, LnBanner],
    templateUrl: './ln-dashboard.html',
    styleUrl: './ln-dashboard.scss',
})
export class LnDashboard {
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
