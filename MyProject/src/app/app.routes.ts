import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/users/users.module').then(m => m.UsersModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
