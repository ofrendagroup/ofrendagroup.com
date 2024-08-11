//
// Define Message Type

import { Library, Base } from '@lernender/core';
//
// MessageAction
//
export enum MessageAction {
    Undefined,
}
//
// Message
//
export class Message extends Base {
    public action: MessageAction;
    public payload: any | undefined = undefined;
    //
    // isDefined
    //
    public isDefined = () => this.hasAction();
    //
    // hasAction
    //
    public hasAction = () => this.action != MessageAction.Undefined;
    //
    // hasPayload
    //
    public hasPayload = () => !Library.isNullOrUndefined(this.payload);
    //
    // Constructor
    //
    constructor(options?: any) {
        super(options);
        this.action = Library.init(options, 'action', MessageAction.Undefined);
        if (Library.hasOwnProperty(options, 'payload')) this.payload = options.payload;
    }
}
