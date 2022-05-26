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
	private readonly baseUrl = "http://localhost:8080"
	private readonly API_MOVIMENTACOES = `${this.baseUrl}/movimentacoes`

	constructor(private http: HttpClient) {
	}

	findAll(): Observable<Movimentacao[]> {
		return this.http.get<Movimentacao[]>(this.API_MOVIMENTACOES);
	}

	gravarMovimentacao(movimentacao: MovimentacaoDTO): Observable<MovimentacaoDTO> {
		//TODO remover as impressoes no log
		console.log("gravarMovimentacao")
		console.log(movimentacao)

		return this.http.post<MovimentacaoDTO>(
			this.API_MOVIMENTACOES, movimentacao,
			{headers: {'Content-Type': "application/json"}}
		);
	}
}
