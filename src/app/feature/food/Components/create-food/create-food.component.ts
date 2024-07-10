import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comida } from '../../models/modelo';
import { MostrarTodosComidasService } from '../../service/mostrar-todos-comidas.service';
import { CrearComidasService, IngredienteSeleccionado, categoria, ingrediente } from '../../service/crear-comidas.service';
import * as bootstrap from 'bootstrap';
import { CreateFoodModel, IngredienteModel } from '../../models/createFood';
@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.css']
})

export class CreateFoodComponent {
  id: number = 0;
  comidas: Comida[] = [];
  nombreComida: string = "";
  recetaComida: string = "";
  categorias: categoria[] = [];
  categoriaSeleccionada: number = 0;
  ingredientes: ingrediente[] = [];
  ingredientesSeleccionados: IngredienteSeleccionado[] = [];
  ingredienteCantidad: { [key: number]: number } = {};
  createdFood: CreateFoodModel = new CreateFoodModel();
  //ingredienteModel: IngredienteModel = new IngredienteModel();

  constructor(private route: ActivatedRoute,
    private MostrarTodosComidasService: MostrarTodosComidasService,
    private CrearComidasService: CrearComidasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')! != null) {
      this.id = +this.route.snapshot.paramMap.get('id')!;
      this.MostrarTodosComidasService.getComidaPorId(this.id).subscribe(
        res => {
          this.comidas = res;
          this.categoriaSeleccionada = this.comidas[0].comidaId.categoria.id;
          this.nombreComida = this.comidas[0].comidaId.nombre;
          this.recetaComida = this.comidas[0].comidaId.receta;
          res.forEach(ingredienteComida => {
            const ingredienteSeleccionado: IngredienteSeleccionado = {
              ingrediente: ingredienteComida.ingredienteId,
              cantidad: ingredienteComida.cantidad
            };
          })
          console.log(this.comidas);

        },
        err => console.log(err)
      );
    }

    this.CrearComidasService.getCategorias().subscribe(
      res => {
        this.categorias = res;
      },
      err => {
        console.error('Error al obtener categorías de comida:', err);
      }
    );

    this.CrearComidasService.getingredientes().subscribe(
      res => {
        this.ingredientes = res;
      },
      err => {
        console.error('Error al obtener categorías de comida:', err);
      }
    );

  }

  agregarIngrediente(ingrediente: ingrediente): void {
    const cantidad = Number(this.ingredienteCantidad[ingrediente.id]);
    if (!isNaN(cantidad) && cantidad > 0) {
      const ingredienteSeleccionado: IngredienteSeleccionado = {
        ingrediente: ingrediente,
        cantidad: cantidad
      };
      this.ingredientesSeleccionados.push(ingredienteSeleccionado);
    }
  }

  quitarIngrediente(index: number): void {
    this.ingredientesSeleccionados.splice(index, 1);
  }

  abrirModal(): void {
    const modal = new bootstrap.Modal(document.getElementById('ingredientesModal')!);
    modal.show();
  }

  guardarComida(){
    this.createdFood.ingredientes = [];
    this.ingredientesSeleccionados.forEach(ingrediente => {

      const ingredienteModel: IngredienteModel = {
        cantidad: ingrediente.cantidad,
        ingredienteId: ingrediente.ingrediente.id
      };
      this.createdFood.ingredientes.push(ingredienteModel);
    });
    this.createdFood.nombre = this.nombreComida;
    this.createdFood.receta = this.recetaComida;
    this.createdFood.categoria.id = this.categoriaSeleccionada;
    this.createdFood.id = this.id;
    
    this.CrearComidasService.createComida(this.createdFood).subscribe(
      response => {
        this.recetaComida = "";
        this.nombreComida = "";
        this.categoriaSeleccionada = 0;
        this.ingredientesSeleccionados = [];
        alert("comida creada");
        if (this.id > 0) {
          this.router.navigate(['/food/mostraComida', this.id])
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
