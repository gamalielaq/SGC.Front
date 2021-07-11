import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cliente } from '../interfaces/clientes';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiUrl = "http://localhost:8085/api/clientes";

  constructor(
    private http: HttpClient
  ) { }

  getClientes(): Observable<Cliente[]> {
    
    // return this.http.get<Cliente[]>(this.apiUrl);

    return this.http.get(this.apiUrl).pipe(
      map(resp => resp as Cliente[])
    );
  }
}