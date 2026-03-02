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
				path: 'relatorio-usuarios',
				loadComponent: () => import('./componentes/cadastro/listagem-usuarios/listagem-usuarios').then((m) => m.ListagemUsuarios),
			},
		],
	},
	{ path: '**', redirectTo: 'dashboard' },
];
