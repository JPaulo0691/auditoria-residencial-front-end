import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuarios',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './cadastro-usuarios.html',
  styleUrl: './cadastro-usuarios.scss',
})
export class CadastroUsuarios {

  constructor(private router: Router) {}

  voltar(): void {
    this.router.navigate(['/relatorio-usuarios']);
  }
}
