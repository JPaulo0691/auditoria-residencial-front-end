import { Routes } from '@angular/router';
import { Menu } from './commons/menu/menu';

export const routes: Routes = [
	{
		path: '',
		component: Menu,
		children: [
			{ path: '', pathMatch: 'full', redirectTo: 'dashboard' },
			{
				path: 'dashboard',
				loadComponent: () => import('./componentes/dashboard/dashboard').then((m) => m.Dashboard),
			},
			{
				path: 'cadastro-usuarios',
				loadComponent: () => import('./componentes/cadastro-usuarios/cadastro-usuarios').then((m) => m.CadastroUsuarios),
			},
		],
	},
	{ path: '**', redirectTo: 'dashboard' },
];
