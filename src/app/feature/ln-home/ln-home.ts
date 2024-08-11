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
import { LnKnowledge } from '@components/ln-knowledge/ln-knowledge';

@Component({
    standalone: true,
    selector: 'ln-home',
    imports: [CommonModule, LnBanner, LnKnowledge],
    templateUrl: './ln-home.html',
    styleUrl: './ln-home.scss',
})
export class LnHome {
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
