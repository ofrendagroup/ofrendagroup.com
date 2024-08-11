import { Library, Base, Icon } from '@lernender/core';
//
// CloudServiceProvider
//
export class CloudServiceProvider extends Base {
    public icon: Icon | undefined;
    //
    // Public Functions
    //
    public hasIcon = (): boolean => Library.isStringWithLength(this.icon?.name);
    //
    // Constructor
    //
    constructor(options: { icon: Icon; name: string; description: string; skills?: string[] }) {
        super(options);
        if (Library.hasOwnProperty(options, 'icon')) {
            this.icon = new Icon({ name: options.icon?.name });
        }
    }
}
