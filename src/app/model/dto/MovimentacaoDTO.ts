import {TipoMovimentacao} from "../TipoMovimentacao";

export class MovimentacaoDTO {

	constructor(
		private _descricao: string,
		private _valorMovimentacao: number,
		private _tipoMovimentacao: TipoMovimentacao,
		private _idCorrentista: number,
	) {
	}

	// mapeia os dados para envio, pois ocorre erro se enviar direto com os nomes dos atributos com prefixo "_"
	// caso o nome de algum campo esteja divergente, o resquest body vai chegar nulo na api, lancando erro 500...
	// converteParaEnvio(): { tipoMovimentacao: TipoMovimentacao; valorMovimentacao: number; idCorrentista: number; descricao: string } {
	// 	let mov = {
	// 		descricao: this._descricao,
	// 		valorMovimentacao: this._valorMovimentacao,
	// 		tipoMovimentacao: this._tipoMovimentacao,
	// 		idCorrentista: this._idCorrentista
	// 	}
	// 	//TODO remover os prints no console
	// 	console.log("converteParaEnvio")
	// 	console.log(mov)
	// 	return mov;
	// }

	get descricao(): string {
		return this._descricao;
	}

	set descricao(value: string) {
		this._descricao = value;
	}

	get tipoMovimentacao(): TipoMovimentacao {
		return this._tipoMovimentacao;
	}

	set tipoMovimentacao(value: TipoMovimentacao) {
		this._tipoMovimentacao = value;
	}

	get valorMovimentacao(): number {
		return this._valorMovimentacao;
	}

	set valorMovimentacao(value: number) {
		this._valorMovimentacao = value;
	}

	get idCorrentista(): number {
		return this._idCorrentista;
	}

	set idCorrentista(value: number) {
		this._idCorrentista = value;
	}
}
