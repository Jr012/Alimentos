import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comida } from '../models/modelo';

@Injectable({
  providedIn: 'root'
})
export class MostrarTodosComidasService {

  private baseUrl = 'http://localhost:8080/alimentos/ingredientesDeComida/';

  constructor(private http: HttpClient) { }


  getComidaPorId(id: number): Observable<Comida[]>{
    return this.http.get<Comida[]>(`${this.baseUrl}${id}`); 
  }
}
