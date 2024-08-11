import { CommonModule } from '@angular/common';
import {
    Component,
    EventEmitter,
    inject,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
//
// Components
//
import { LnCardKnowledge } from '@components/card/ln-card-knowledge/ln-card-knowledge';
import { LnIcon } from '@components/ln-icon/ln-icon';
import { LnTabPanel } from '@components/ln-tab-panel/ln-tab-panel';
import { LnTab } from '@components/ln-tab/ln-tab';
//
// Services
//
import { LnMessageService } from '@service/ln-common/ln-message.service';
//
// Libraries
//
import { Library } from '@lernender/core';
//
// Models
//
import { Message, MessageAction } from '@model/message';
//
// Store(s)
//
import { AppStore, SetFilter } from '@store/app.store';
import { Knowledge } from '@model/knowledge';

@Component({
    standalone: true,
    selector: 'ln-knowledge',
    imports: [CommonModule, LnIcon, LnTabPanel, LnTab, LnCardKnowledge],
    templateUrl: 'ln-knowledge.html',
    styleUrls: ['ln-knowledge.scss'],
    providers: [LnMessageService],
})
export class LnKnowledge implements OnInit {
    @Input() public title!: string;
    @Input() public hidden: boolean;
    @Input() public disabled: boolean;
    @Output() public onClick: EventEmitter<any> = new EventEmitter();
    //
    // Public Variables
    //
    public languages: Knowledge[] = [];
    public services: Knowledge[] = [];
    public databases: Knowledge[] = [];
    public machineLearning: Knowledge[] = [];

    //
    // Store
    //
    public readonly store = inject(AppStore);
    //
    // constructor()
    //
    constructor(private messageService: LnMessageService) {
        this.disabled = false;
        this.hidden = false;
    }
    //
    // ngOnInit()
    //
    public ngOnInit() {
        this.languages = this.store.supportedLanguages();
        this.services = this.store.supportedCloudSolutionProviders();
        this.databases = this.store.supportedDatabases();
        this.machineLearning = this.store.supportedMachineLearning();
        debugger;
    }
    //
    // handleTabChange
    //
    public handleTabChange = (tab: { id: number }) => {
        //
        // Tab.Id
        //
        if (tab['id'] === 2) {
            //
            // OnFixationClicked
            //
            this.messageService?.dispatch(
                new Message({
                    action: MessageAction.Undefined,
                    payload: {},
                })
            );
        }
    };
    //
    // OnClick
    //
    public handleOnClick($event: Event) {
        if (Library.isDefined(this.onClick)) {
            this.onClick.emit($event);
        }
    }
    //
    // ngOnChange
    //
    public ngOnChanges(): void {}
}
