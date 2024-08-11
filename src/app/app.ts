import { Component, OnInit, inject } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
//
// AppStore
//
import { AppStore, SetFilter } from '@store/app.store';
//
// @lernender/core
//

//
// Components
//
import { LnMenu } from '@components/menu/ln-menu/ln-menu';
import { LnIconToolBar } from '@components/ln-icon-toolbar/ln-icon-toolbar';
import { LnHyperLink } from './components/ln-hyperlink/ln-hyperlink';
//
// Features
//
import { LnDashboard } from '@feature/ln-dashboard/ln-dashboard';
//
// Libraries
//
import { Icon, Action } from '@lernender/core';
//
// Models
//
import { Menu } from '@model/menu';
import { SocialMedia } from '@model/socialMedia';
//
// Component
//
import { LnJsonService } from '@service/ln-json/ln-json.service';

@Component({
    standalone: true,
    selector: 'ofg-app',
    imports: [RouterOutlet, LnDashboard, LnMenu, LnIconToolBar, LnHyperLink],
    templateUrl: './app.html',
    styleUrl: './app.scss',
    providers: [AppStore, provideAnimations(), LnJsonService],
})
export class AppComponent {
    //
    // Public Variables
    //
    public readonly appStore = inject(AppStore);

    public menu: Menu[] = [];
    public socialMediaIcons: Icon[] = [];
    //
    // Constructor
    //
    public constructor() {
    }
    //
    // ngOnInit
    //
    public ngOnInit(): void {
        //
        // Setup Dynamic Menu
        //
        this.menu = [
        ];
        //
        // Setup Social media Icons
        //
        this.socialMediaIcons = [
            new SocialMedia({
                name: 'user',
            }),
            new SocialMedia({
                name: 'phone',
            }),
            new SocialMedia({
                name: 'envelop',
            }),
        ];
    }
}
