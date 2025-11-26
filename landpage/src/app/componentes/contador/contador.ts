import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {
  constructor() {
    this.contador = 0;
  }
  contador = 0;

  somar(): void {
    this.contador++;
  }

  diminuir(): void {
    this.contador--;
  }

  renderParagrafos() {
    const lista = [1, 2, 3];
    return lista.map((item) => (
      `<p>paragráfo: ${item}</p> `
    ))
  }
}
