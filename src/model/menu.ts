import { Library, Action } from '@lernender/core';

//
// menuType
//
export const enum MenuType {
    Undefined = 0,
    Section,
    Popup,
}
//
// Menu
//
export class Menu extends Action {
    public type: MenuType;
    public component: any | undefined;
    //
    // Constructor
    //
    constructor(options: object) {
        super(options);
        this.type = Library.init(options, 'type', MenuType.Undefined);
        this.component = Library.init(options, 'component');
        this.style = Object.assign(
            {},
            Library.init(options, 'style', {
                color: '#fff',
            })
        );
    }
}
