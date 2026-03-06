import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { CadastroUsuariosService } from '../../../service/cadastro-usuarios-service';

@Component({
  selector: 'app-listagem-usuarios',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    RouterModule
  ],
  templateUrl: './listagem-usuarios.html',
  styleUrl: './listagem-usuarios.scss',
})
export class ListagemUsuarios implements AfterViewInit {
  displayedColumns: string[] = ['nome', 'email', 'acoes'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router, private cadastroUsuariosService: CadastroUsuariosService) {}

  ngAfterViewInit() {
    this.dataSource.data = this.cadastroUsuariosService.getUsuarios();
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    });
  }

  navegarPara(rota: string): void {
    this.router.navigate([rota]);
  }

  editarUsuario(id: number): void {
    this.router.navigate(['/editar-usuarios', id]);
  }

  excluirUsuario(id: number): void {
    const usuarios = this.cadastroUsuariosService.getUsuarios();
    const usuarioIndex = usuarios.findIndex(u => u.id === id);
    if (usuarioIndex !== -1) {
      usuarios.splice(usuarioIndex, 1);
      localStorage.setItem(CadastroUsuariosService.REPO_USUARIOS, JSON.stringify(usuarios));
      this.dataSource.data = usuarios;
    }
  }
}
