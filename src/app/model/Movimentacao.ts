import {TipoMovimentacao} from "./TipoMovimentacao";
import {Correntista} from "./Correntista";

export class Movimentacao {


  get correntista(): Correntista | undefined {
    return this._correntista;
  }

  set correntista(value: Correntista | undefined) {
    this._correntista = value;
  }

  constructor(
    private _id: number,
    private _dataHora: string,
    private _descricao: string,
    private _tipo: TipoMovimentacao,
    private _valor: number,
    private _idCorrentista: number,
    private _correntista?: Correntista) {
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
