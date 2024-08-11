import { style, trigger, transition, animate } from '@angular/animations';

const  defaultAnimation = trigger('defaultAnimation', [
    transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('150ms ease-in', style({ opacity: 1, transform: 'scale(1)' })),
    ]),
    transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate('150ms ease-in', style({ opacity: 0, transform: 'scale(0.8)' })),
    ]),
]);

export { defaultAnimation };