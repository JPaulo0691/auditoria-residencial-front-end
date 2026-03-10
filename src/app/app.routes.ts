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
			{
				path: 'cadastro-usuarios',
				loadComponent: () => import('./componentes/cadastro/cadastro-usuarios/cadastro-usuarios').then((m) => m.CadastroUsuarios),
			},
      {
        path: 'editar-usuarios/:id',
        loadComponent: () => import('./componentes/cadastro/editar-usuarios/editar-usuarios').then((m) => m.EditarUsuarios),
      }
		],
	},
	{ path: '**', redirectTo: 'dashboard' },
];
