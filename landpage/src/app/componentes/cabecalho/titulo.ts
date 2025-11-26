import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho-titulo',
  imports: [],
  templateUrl: './titulo.html',
  styleUrl: './cabecalho.css',
})
export class TituloCabecalho {
	titulo = {
		principal: 'Página inicial - tela de apresentação'
	}
}
