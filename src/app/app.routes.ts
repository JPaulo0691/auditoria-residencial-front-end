import { Routes } from '@angular/router';
import { Menu } from './commons/menu/menu';

export const routes: Routes = [
	{ path: 'menu', component: Menu },
	{ path: '', pathMatch: 'full', redirectTo: 'menu' },
	{ path: '**', redirectTo: 'menu' },
];
