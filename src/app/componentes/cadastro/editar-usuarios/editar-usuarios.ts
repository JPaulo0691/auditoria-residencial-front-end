import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Usuario } from '../../../model/usuario.model';

@Component({
  selector: 'app-editar-usuarios',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './editar-usuarios.html',
  styleUrl: './editar-usuarios.scss',
})
export class EditarUsuarios implements OnChanges {
  @Input() usuario: Usuario | null = null;
  @Output() salvo = new EventEmitter<Usuario>();
  @Output() fechar = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['usuario'] && this.usuario) {
      this.form.patchValue({
        nome: this.usuario.nome,
        email: this.usuario.email,
      });
    }
  }

  salvar(): void {
    if (this.form.valid && this.usuario) {
      this.salvo.emit({ ...this.usuario, ...this.form.value });
    }
  }

  voltar(): void {
    this.fechar.emit();
  }
}
