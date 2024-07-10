import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Comida } from '../../models/modelo';
import { MostrarTodosComidasService } from '../../service/mostrar-todos-comidas.service';

@Component({
  selector: 'app-mostrar-detalles',
  templateUrl: './mostrar-detalles.component.html',
  styleUrls: ['./mostrar-detalles.component.css']
})
export class MostrarDetallesComponent implements OnInit {
  id!: number; 

  comidas: Comida[] = [];
  primerComida: Comida | undefined; 
  
  constructor(private route: ActivatedRoute,
              private router: Router,
              private MostrarTodosComidasService:  MostrarTodosComidasService) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.MostrarTodosComidasService.getComidaPorId(this.id).subscribe(
      res => {
        this.comidas = res;
        if (this.comidas.length > 0) {
          this.primerComida = this.comidas[0]; 
        }
        console.log(this.comidas);
      },
      err => console.log(err)
    );
  }

  EditarDetalles(idcomida: number | undefined): void {
    if (idcomida !== undefined) {
      this.router.navigate(['/food/createfood', idcomida])
    }
    }
}
