export class Conta {

  constructor(
    private _numero: string,
    private _saldo: number) {
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
