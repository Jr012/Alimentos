import { Injectable } from '@angular/core';
import { Comida } from '../models/modelo';
import { HttpClient } from '@angular/common/http';


export interface categoria {
  id: number;
  descripcion : string;
  };

  export interface ingrediente{
    id: number;
    descripcion : string;
    unidad_de_medidas: string;
    };
export interface IngredienteSeleccionado {
  ingrediente: ingrediente;
  cantidad: number;
}
@Injectable({
  providedIn: 'root'
})
export class CrearComidasService {

  URICATEGORIA = 'http://localhost:8080/alimentos/categorias'
  URIINGREDIENTES = 'http://localhost:8080/alimentos/ingredientes'
  URI = 'http://localhost:8080/alimentos/comidas'

  constructor(private http: HttpClient) { }
  
  getCategorias(){
    return this.http.get<categoria[]>(this.URICATEGORIA);
  }

  getingredientes(){
    return this.http.get<ingrediente[]>(this.URIINGREDIENTES);
  }
  createComida(comida: any){
    return this.http.post(this.URI, comida);
  }
}
