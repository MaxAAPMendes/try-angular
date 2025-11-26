import { Component } from '@angular/core';

@Component({
  selector: 'app-rodape',
  imports: [],
  templateUrl: './rodape.html',
  styleUrl: './rodape.css',
})
export class Rodape {
  constructor() {

  }
  titulo = {
    principal: 'Empresa Xtestes',
    secundario: 'Entre em contato',
  }

  clicouNoTelefone(params: void): void {
    return alert('clicouNoTelefone')
  }
}
