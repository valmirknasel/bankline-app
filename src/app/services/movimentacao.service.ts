import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Movimentacao} from "../model/Movimentacao";

//caminho base da api que vai ser acessada
const baseUrl = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  constructor(private http: HttpClient) { }

    list(): Observable<any> {
      return this.http.get(`${baseUrl}/movimentacoes`);
    }

    listaMovimentacoes(): Movimentacao[] {
      let ms = this.list();
      let movimentacoes: Movimentacao[] = [];
      ms.subscribe(listaDeMovimentacoes => {
          movimentacoes = listaDeMovimentacoes;
        },
      error => {
        console.log(error);
      });
      console.log('dados da api de movimentacoes: ' + movimentacoes);
      console.log('tamanho movimentacoes: ' + movimentacoes.length);
      return movimentacoes;
    }
}
