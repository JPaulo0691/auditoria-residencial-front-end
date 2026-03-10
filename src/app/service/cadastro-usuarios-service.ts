import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class CadastroUsuariosService {

  static REPO_USUARIOS = '_USERS';

  salvarUsuario(usuario: Usuario) {
    // Lógica para salvar o usuário (pode ser uma chamada HTTP para um backend, a ser feito posteriormente)
    const usuarios = this.getStorageUsuarios();
    usuarios.push(usuario);
    localStorage.setItem(CadastroUsuariosService.REPO_USUARIOS, JSON.stringify(usuarios));
  }

  getStorageUsuarios(): Usuario[] {
    const usuariosRepo = localStorage.getItem(CadastroUsuariosService.REPO_USUARIOS);

    if (usuariosRepo) {
     const usuarios: Usuario[] = JSON.parse(usuariosRepo);
     return usuarios;
    }

    const usuarios: Usuario[] = [];
    localStorage.setItem(CadastroUsuariosService.REPO_USUARIOS, JSON.stringify(usuarios));
    return usuarios;
  }

  getUsuarios(): Usuario[] {
    return this.getStorageUsuarios();
  }

  atualizarUsuario(usuarioAtualizado: Usuario): void {
    const usuarios = this.getStorageUsuarios();
    const index = usuarios.findIndex(u => u.id === usuarioAtualizado.id);
    if (index !== -1) {
      usuarios[index] = usuarioAtualizado;
      localStorage.setItem(CadastroUsuariosService.REPO_USUARIOS, JSON.stringify(usuarios));
    }
  }
}
