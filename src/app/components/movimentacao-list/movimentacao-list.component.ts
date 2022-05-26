import {Component, OnInit} from '@angular/core';
import {MovimentacaoService} from 'src/app/services/movimentacao.service';
import {Movimentacao} from "../../model/Movimentacao";

@Component({
	selector: 'app-movimentacao-list',
	templateUrl: './movimentacao-list.component.html',
	styleUrls: ['./movimentacao-list.component.scss']
})
export class MovimentacaoListComponent implements OnInit {

	movimentacoes: Movimentacao[] = [];
	data!: Date;

	constructor(private movimentacaoService: MovimentacaoService) {
	}

	ngOnInit(): void {
		this.recuperaDadosDaApi();
		this.inicializaForm();
	}

	recuperaDadosDaApi(): void {
		this.recuperaDataAtualizacaoTabela();
		this.movimentacaoService.findAll().subscribe(listaDeMovimentacoes => {
				this.movimentacoes = listaDeMovimentacoes;
			},
			error => {
				console.log(error);
			})
	}

	private inicializaForm() {
	}

	private recuperaDataAtualizacaoTabela(): Date {
		return this.data = new Date();
	}
}
