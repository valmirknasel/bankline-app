import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Movimentacao} from "../model/Movimentacao";

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  //caminho base da api que vai ser acessada
  private baseUrl = "http://localhost:8080"
  private listaDeMovimentacoesUrl = `${this.baseUrl}/movimentacoes`

  constructor(private http: HttpClient) { }

    findAll(): Observable<Movimentacao[]> {
      return this.http.get<Movimentacao[]>(this.listaDeMovimentacoesUrl);
    }
}
