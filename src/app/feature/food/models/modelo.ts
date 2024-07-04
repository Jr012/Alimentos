export class food {
    id?: number;
    nombre:string;
    categoria:string;
    imageUrl: string;
    ingredientes: string[];
    descripcion: string;


    constructor(nombre: string, categoria:string, imageUrl:string, ingredientes:string[], descripcion:string){
        this.nombre = nombre;
        this.categoria = categoria;
        this.imageUrl = imageUrl; 
        this.ingredientes =ingredientes;
        this.descripcion = descripcion;
}
}

