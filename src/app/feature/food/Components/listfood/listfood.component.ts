import { Component,Output } from '@angular/core';
import { Router } from '@angular/router';
import { Food, MostrarComidasService } from '../../service/mostrar-comidas.service';

@Component({
  selector: 'app-listfood',
  templateUrl: './listfood.component.html',
  styleUrls: ['./listfood.component.css']
})
export class ListfoodComponent {
  
    comidas: Food[] = [];

    constructor(private mostrarComidasService: MostrarComidasService,
      private router: Router) {}

    ngOnInit(): void {
      this.mostrarComidasService.getcomidas().subscribe(
        res => {
          this.comidas = res;
        },
        err => console.log(err)
      );
    }

    @Output() id: number = 0;

    mostrarDetalles(idCategoria: number): void {
      console.log(idCategoria);
      this.id= (idCategoria);
      this.router.navigate(['/food/mostraComida', idCategoria])
    }
}
