// modelo.ts (or appropriate file)
export interface Comida {
  id: number;
  cantidad: number;

  comidaId: {
    id: number;
    nombre: string;
    receta: string;
    categoria: {
      id: number;
      descripcion: string;};
  }
  ingredienteId: {
    id: number;
    descripcion: string;
    unidad_de_medidas: string;
  };
}
