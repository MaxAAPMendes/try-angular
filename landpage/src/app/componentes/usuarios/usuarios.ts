import { Component } from '@angular/core';

export interface Usuario {
  id: number,
  nome: string,
  setor: string,
}

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  usuarios: Usuario[] = [
    {
      id: 1,
      nome: "Max Pinheiro",
      setor: "Tecnologia",
    },
    {
      id: 2,
      nome: "Marcus Gabriel",
      setor: "Data Science",
    },
  ]

  semUsuarios: Usuario[] = [];
}
