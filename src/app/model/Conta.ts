export class Conta {
  private _numero: string;
  private _saldo: number;

  constructor(numero: string, saldo: number) {
    this._numero = numero;
    this._saldo = saldo;
  }


  get numero(): string {
    return this._numero;
  }

  set numero(value: string) {
    this._numero = value;
  }

  get saldo(): number {
    return this._saldo;
  }

  set saldo(value: number) {
    this._saldo = value;
  }
}
