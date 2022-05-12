import {TipoMovimentacao} from "./TipoMovimentacao";
import {Correntista} from "./Correntista";

export class Movimentacao {

  private _id: number;
  private _dataHora: string;
  private _descricao: string;
  private _tipo: TipoMovimentacao;
  private _valor: number;
  private _idCorrentista: number;
  private _correntista: Correntista;

  get correntista(): Correntista {
    return this._correntista;
  }

  set correntista(value: Correntista) {
    this._correntista = value;
  }

  constructor({_id, _dataHora, _descricao, _tipo, _valor, _idCorrentista, _correntista}: Movimentacao) {
    this._id = _id;
    this._dataHora = _dataHora;
    this._descricao = _descricao;
    this._tipo = _tipo;
    this._valor = _valor;
    this._idCorrentista = _idCorrentista;
    this._correntista = _correntista;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get dataHora(): string {
    return this._dataHora;
  }

  set dataHora(value: string) {
    this._dataHora = value;
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
