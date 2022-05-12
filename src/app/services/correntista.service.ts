// services/correntista.service.ts

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

//URL base da api que vai ser consultada
const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class CorrentistaService {
  constructor(private http: HttpClient) {
  }

  list(): Observable<any> {
    return this.http.get(`${baseUrl}/correntistas`);
  }

  getCorrentistaById(idCorrentista: number): Observable<any> {
    let id = idCorrentista;
    return this.http.get(`${baseUrl}/correntistas/${id}`);
  }
}
