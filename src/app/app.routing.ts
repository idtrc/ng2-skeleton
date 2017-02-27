import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { HomePageComponent } from './components/home-page/home-page.component';

const appRoutes: Routes = [    
    {
            path: '',
            component: HomePageComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);