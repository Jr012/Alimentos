import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



export interface Food {
  id: number;
  nombre: string;
  receta: string;
  categoria: {
    id: number;
    descripcion: string;
  };

}

@Injectable({
  providedIn: 'root'
})
export class MostrarComidasService {

  URI = 'http://localhost:8080/alimentos/comidas'

  constructor(private http: HttpClient) { }

  getcomidas(){
    return this.http.get<Food[]>(this.URI);
  }
}



