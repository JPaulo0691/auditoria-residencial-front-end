import { CadastroUsuariosService } from './../../../service/cadastro-usuarios-service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuarios',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  templateUrl: './cadastro-usuarios.html',
  styleUrl: './cadastro-usuarios.scss',
})
export class CadastroUsuarios {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cadastroUsuariosService: CadastroUsuariosService,
    private snackBar: MatSnackBar,
  ) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  salvar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const usuarios = this.cadastroUsuariosService.getStorageUsuarios();
    const idsValidos = usuarios.map(u => Number(u.id)).filter(id => !isNaN(id) && id > 0);
    const novoId = idsValidos.length > 0 ? Math.max(...idsValidos) + 1 : 1;
    this.cadastroUsuariosService.salvarUsuario({ ...this.form.value, id: novoId });
    this.snackBar.open('Usuário cadastrado com sucesso!', 'Fechar', { duration: 3000 });
    this.navegueParaVoltar('/relatorio-usuarios');
  }

  navegueParaVoltar(destino: string): void {
    this.router.navigate([destino]);
  }
}
