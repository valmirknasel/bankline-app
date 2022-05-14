import {TipoMovimentacao} from "../TipoMovimentacao";

export class MovimentacaoDTO {

	constructor(
		private _descricao: string,
		private _valor: number,
		private _tipo: TipoMovimentacao,
		private _idCorrentista: number
	) {
	}


	get descricao(): string {
		return this._descricao;
	}

	set descricao(value: string) {
		this._descricao = value;
	}

	get tipo(): TipoMovimentacao {
		return this._tipo;
	}

	set tipo(value: TipoMovimentacao) {
		this._tipo = value;
	}

	get valor(): number {
		return this._valor;
	}

	set valor(value: number) {
		this._valor = value;
	}

	get idCorrentista(): number {
		return this._idCorrentista;
	}

	set idCorrentista(value: number) {
		this._idCorrentista = value;
	}
}
