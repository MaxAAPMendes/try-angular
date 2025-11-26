import { Component, input } from '@angular/core';
import {LivroInterface} from '../../interfaces/livro';


@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css',
})
export class Livro {
  livro = input.required<LivroInterface>()
}
