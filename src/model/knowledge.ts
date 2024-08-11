import { Library, Base, Icon } from '@lernender/core';
//
// Knowledge
//
export class Knowledge extends Base {
    public icon: Icon | undefined;
    public framework?: string[] = [];
    public type: string = '';
    //
    // Public Functions
    //
    public hasIcon = (): boolean => Library.isStringWithLength(this.icon?.name);
    public hasFrameworks = (): boolean => Library.isArrayWithLength(this.framework);
    //
    // Constructor
    //
    constructor(options: { icon: Icon; name: string; description: string; framework?: string[] }) {
        super(options);
        this.type = Library.init(options, 'type', '');
        if (Library.hasOwnProperty(options, 'icon')) {
            this.icon = new Icon({ name: options.icon?.name });
        }
        if (Library.isArrayWithLength(options?.framework)) {
            this.framework = options.framework;
        }
    }
}
