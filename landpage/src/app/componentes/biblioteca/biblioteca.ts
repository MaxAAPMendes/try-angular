import { Component } from '@angular/core';
import { Livro } from '../livro/livro';
import { livrosMocks } from '../../mocks/livros';


@Component({
  selector: 'app-biblioteca',
  imports: [Livro],
  templateUrl: './biblioteca.html',
  styleUrl: './biblioteca.css',
})
export class Biblioteca {
  biblio = livrosMocks[0]
}
