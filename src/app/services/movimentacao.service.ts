import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movimentacao} from "../model/Movimentacao";
import {MovimentacaoDTO} from "../model/dto/MovimentacaoDTO";

@Injectable({
	providedIn: 'root'
})
export class MovimentacaoService {

	//caminho base da api que vai ser acessada
	private baseUrl = "http://localhost:8080"
	private listaDeMovimentacoesUrl = `${this.baseUrl}/movimentacoes`

	constructor(private http: HttpClient) {
	}

	findAll(): Observable<Movimentacao[]> {
		return this.http.get<Movimentacao[]>(this.listaDeMovimentacoesUrl);
	}

	gravarMovimentacao(movimentacao: MovimentacaoDTO) {
			//TODO remover as impressoes no log
			console.log("gravarMovimentacao")
			console.log(movimentacao)
			return this.http.post(`${this.baseUrl}/movimentacoes`, movimentacao);
	}
}
