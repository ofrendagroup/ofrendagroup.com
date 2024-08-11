import { Library, Icon } from '@lernender/core';

export class SocialMedia extends Icon {
    //
    // Constructor
    //
    constructor(options: object) {
        super(options);
        this.style = Object.assign(
            {},
            Library.init(options, 'style', {
                fontSize: '20px',
            })
        );
    }
}
