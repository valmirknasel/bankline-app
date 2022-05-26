import {Component, OnInit} from '@angular/core';
import {CorrentistaService} from 'src/app/services/correntista.service';
import {MovimentacaoService} from 'src/app/services/movimentacao.service';
import {Correntista} from "../../model/Correntista";
import {TipoMovimentacao} from "../../model/TipoMovimentacao";
import {MovimentacaoDTO} from "../../model/dto/MovimentacaoDTO";
import {Router} from "@angular/router";

@Component({
	selector: 'app-movimentacao-new',
	templateUrl: './movimentacao-new.component.html',
	styleUrls: ['./movimentacao-new.component.scss']
})
export class MovimentacaoNewComponent implements OnInit {

	//tem que ser declarado assim para que possa usar o enum no componente.html
	tipoMovimentacao = TipoMovimentacao;
	correntistas: Correntista[] = [];
	//correntista e movimentacao podem ficar undefined durante o carregamento da pagina, por isso se coloca o !
	correntistaSelecionado!: Correntista;
	movimentacao!: MovimentacaoDTO;


	constructor(private movimentacaoService: MovimentacaoService, private correntistaService: CorrentistaService, private router:Router) {
	}

	ngOnInit(): void {
		this.listarCorrentistas();
		this.inicializaForm();
	}

	listarCorrentistas(): void {
		this.correntistaService.list().subscribe(
			data => {
				this.correntistas = data;
				//TODO remover as impressoes no log
				console.log("listarCorrentistas");
				console.log(data);
			},
			error => {
				console.log(error);
			});
	}

	salvarMovimentacao(): void {
		let decision = confirm("Tem certeza que deseja prosseguir?")
		if (decision) {
			//TODO remover as impressoes no log
			console.log("salvarMovimentacao-movimentacao");
			console.log(this.movimentacao);

			if (this.movimentacao !== undefined) {
				this.movimentacaoService.gravarMovimentacao(this.movimentacao).subscribe(
					() => {
						//TODO melhorar essa respsota...
						confirm("Nova movimentação gravada com sucesso!")
						this.router.navigate(['/movimentacoes']);
					},
					error => {
						console.log("error");
						console.log(error);
					}
				);
			} else {
				this.inicializaForm();
				//TODO remover as impressoes no log
				console.log("salvarMovimentacao-inicializarForm")
			}
		} else {
			return;
		}
		console.log("Decisao")
		console.log(decision)
	}

	private inicializaForm() {
		if (this.movimentacao === undefined) {
			this.movimentacao = new MovimentacaoDTO('', 0, TipoMovimentacao.RECEITA, 0);
		}
	}

	selecionaCorrentista() {
		this.movimentacao.idCorrentista = this.correntistaSelecionado.id;
		//TODO remover as impressoes no log
		console.log("selecionaCorrentista")
		console.log(this.movimentacao)
	}

	selecionaTipoMovimento() {
		//TODO remover as impressoes no log
		console.log("selecionaTipoMovimento")
		console.log(this.movimentacao)
	}

	descricaoModificada() {
		//TODO remover as impressoes no log
		console.log("descricaoModificada")
		console.log(this.movimentacao)
	}

	valorModificado() {
		//TODO remover as impressoes no log
		console.log("valorModificado")
		console.log(this.movimentacao)
	}
}
