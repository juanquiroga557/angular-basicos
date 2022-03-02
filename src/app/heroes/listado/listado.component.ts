import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {

  heroes : string[] = ['Spiderman','Thor','Ironman','Doctor Strange'];
  heroeBorrado : string = "";

  borrarHeroe() { 
    this.heroeBorrado = this.heroes.shift() || "";
  }
}
