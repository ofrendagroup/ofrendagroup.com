import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
    AfterViewInit,
    Component,
    HostBinding,
    Input,
    OnDestroy,
    OnInit,
    ViewChild,
    ElementRef,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { Overlay, OverlayConfig, OverlayModule, RepositionScrollStrategy } from '@angular/cdk/overlay';

import { Subscription } from 'rxjs';
import { TemplatePortal } from '@angular/cdk/portal';
//
// @lernender/core
//
import { Icon, Library, Response } from '@lernender/core';
//
// Model
//
import { Menu } from '@model/menu';
import { defaultAnimation } from '@model/animation/default';
//
// Components
//
import { LnIcon } from '@components/ln-icon/ln-icon';

//
// Component
//
@Component({
    standalone: true,
    imports: [CommonModule, OverlayModule, NgComponentOutlet, NgOptimizedImage, LnIcon],
    selector: 'ln-menu-item',
    templateUrl: 'ln-menu-item.html',
    styleUrls: ['ln-menu-item.scss'],
    animations: [defaultAnimation],
})
export class LnMenuItem implements OnInit, AfterViewInit, OnDestroy {
    @Input() public item!: Menu;
    @Input() public hidden: boolean;
    @Input() public disabled: boolean;
    //
    // HostBindings
    //
    @HostBinding('@defaultAnimation') public animate = true;
    //
    // ViewChild()
    //
    @ViewChild('portalContainer') portalContainer!: ElementRef;
    @ViewChild('portalView') portalView!: TemplateRef<any>;

    //
    // Public Variables
    //
    public subscriptions!: Subscription[];
    public overlayRef: any;
    public scrollStrategy!: RepositionScrollStrategy;
    public open: boolean = false;
    public icon!: Icon;
    public component: any;
    public componentProps!: Record<string, unknown>;
    //
    // Constructor
    //
    constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) {
        this.subscriptions = [];
        this.hidden = false;
        this.disabled = false;
    }
    //
    // ngAfterViewInit
    //
    public ngAfterViewInit(): void {}
    //
    // ngOnInit
    //
    public ngOnInit() {
        //
        // Input Controls
        //
        this.icon = new Icon({
            name: 'angle-down',
            onClick: ($event: MouseEvent) => {
                $event.preventDefault();
                $event.stopPropagation();
                this.open = !this.open;
                this.setIcon(this.open);
                if (this.open) {
                    this.onOpenMenu();
                } else {
                    this.onCloseMenu();
                }
            },
        });
    }
    //
    // onOpenMenu
    //
    public onOpenMenu = () => {
        //
        // Set Component
        //
        this.component = this.item.component;
        this.componentProps = {};
        //
        // Create Overlay Config
        //
        const config = new OverlayConfig({
            positionStrategy: this.overlay
                .position()
                .flexibleConnectedTo(this.portalContainer)
                .setOrigin(this.portalContainer)
                .withPositions([
                    {
                        originX: 'end',
                        originY: 'bottom',
                        overlayX: 'end',
                        overlayY: 'top',
                        offsetY: 6,
                    },
                    {
                        originX: 'start',
                        originY: 'bottom',
                        overlayX: 'start',
                        overlayY: 'top',
                        offsetY: 6,
                    },
                ]),
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
        });

        //
        // Define Overlay
        //
        this.overlayRef = this.overlay.create(config);
        this.subscriptions.push(this.overlayRef.backdropClick().subscribe(() => this.detachOverlay()));
        //
        // Attach overlay to CdkPOrtal
        //
        this.overlayRef.attach(
            new TemplatePortal(this.portalView, this.viewContainerRef, {
                $implicit: {},
            })
        );
    };
    //
    // onCloseItems()
    //
    public onCloseMenu() {
        //
        // onCloseContextMenu
        //
        this.detachOverlay();
    }
    //
    // ngOnDestroy()
    //
    public ngOnDestroy() {
        //
        // onCloseContextMenu
        //
        this.detachOverlay();
    }
    //
    // detachOverlay()
    //
    private detachOverlay() {
        this.open = false;
        this.setIcon(this.open);
        if (this.subscriptions) this.subscriptions.forEach((s) => s.unsubscribe());
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
        }
    }

    private setIcon = (open: boolean) => (this.icon.name = open ? 'angle-up' : 'angle-down');
}
