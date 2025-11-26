import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from './componentes/cabecalho/cabecalho';
import { Rodape } from './componentes/rodape/rodape';
import { Contador } from './componentes/contador/contador';
import { Biblioteca } from './componentes/biblioteca/biblioteca';
import { Usuarios } from './componentes/usuarios/usuarios';



@Component({
  selector: 'app-root',
  imports: [
    Cabecalho,
    Rodape,
    Contador,
    Biblioteca,
    Usuarios,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('landpage');
}
