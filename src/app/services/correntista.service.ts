// services/correntista.service.ts

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Correntista} from "../model/Correntista";

//URL base da api que vai ser consultada
const baseUrl = 'http://localhost:8080';

@Injectable({
		providedIn: 'root'
})
export class CorrentistaService {
		constructor(private http: HttpClient) {
		}

		list(): Observable<Correntista[]> {
				return this.http.get<Correntista[]>(`${baseUrl}/correntistas`);
		}

		getCorrentistaById(idCorrentista: number): Observable<Correntista> {
			//TODO descobri por qual motivo é necessário declarar a variavel localmente se ela já vem no metodo como argumento
			let id = idCorrentista;
				return this.http.get<Correntista>(`${baseUrl}/correntistas/${id}`);
		}
}
