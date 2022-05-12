import {Conta} from "./Conta";

export class Correntista {
  private _id: number;
  private _cpf: string;
  private _nome: string;
  private _conta: Conta;

  constructor(id: number, cpf: string, nome: string, conta: Conta) {
    this._id = id;
    this._cpf = cpf;
    this._nome = nome;
    this._conta = conta;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get cpf(): string {
    return this._cpf;
  }

  set cpf(value: string) {
    this._cpf = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get conta(): Conta {
    return this._conta;
  }

  set conta(value: Conta) {
    this._conta = value;
  }
}
