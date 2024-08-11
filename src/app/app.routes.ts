import { Routes } from '@angular/router';

//
// Features
//
import { OfgFeatureNotFound } from '@feature/ofg-feature-not-found/ofg-feature-not-found';
import { OfgHome } from '@feature/ofg-home/ofg-home';
import { OfgProduct } from '@feature/ofg-product/ofg-product';
import { OfgAbout } from '@feature/ofg-about/ofg-about';
import { OfgContact } from '@feature/ofg-contact/ofg-contact';
//
// Routes
//
export const routes: Routes = [
    {
        path: 'home',
        canActivate: [],
        component: OfgHome,
    },
    // {
    //     path: 'product',
    //     canActivate: [],
    //     component: OfgProduct,
    // },
    // {
    //     path: 'about',
    //     canActivate: [],
    //     component: OfgAbout,
    // },
    // {
    //     path: 'contact',
    //     canActivate: [],
    //     component: OfgContact,
    // },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: OfgFeatureNotFound,
    },
];
