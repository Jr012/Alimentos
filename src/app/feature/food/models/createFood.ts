export class CreateFoodModel {
    id: number;
    nombre: string;
    receta: string;
    categoria: CategoryModel;
    ingredientes: IngredienteModel[];

    constructor(){
        this.id = 0;
        this.nombre = "";
        this.receta = "";
        this.categoria = new CategoryModel();
        this.ingredientes = [];
    };
}

export class IngredienteModel {
    ingredienteId: number;
    cantidad: number;

    constructor(){
        this.ingredienteId = 0;
        this.cantidad = 0;
    }
}

class CategoryModel {
    id: number;
    constructor(){
        this.id = 0;
    }
}