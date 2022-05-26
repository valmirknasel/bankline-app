import {TipoMovimentacao} from "./TipoMovimentacao";
import {Correntista} from "./Correntista";

export class Movimentacao {

	constructor(
		private _idMovimentacao: number,
		private _dataHora: string,
		private _numeroContaCorrentista: number,
		private _descricao: string,
		private _tipoMovimentacao: TipoMovimentacao,
		private _valor: number,
		private _nomeDoCorrentista: string) {
	}

	get nomeDoCorrentista(): string {
		return this._nomeDoCorrentista;
	}

	set nomeDoCorrentista(value: string) {
		this._nomeDoCorrentista = value;
	}


	get idMovimentacao(): number {
		return this._idMovimentacao;
	}

	set idMovimentacao(value: number) {
		this._idMovimentacao = value;
	}

	get dataHora(): string {
		return this._dataHora;
	}

	set dataHora(value: string) {
		this._dataHora = value;
	}

	get numeroContaCorrentista(): number {
		return this._numeroContaCorrentista;
	}

	set numeroContaCorrentista(value: number) {
		this._numeroContaCorrentista = value;
	}

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

	get valor(): number {
		return this._valor;
	}

	set valor(value: number) {
		this._valor = value;
	}
}
