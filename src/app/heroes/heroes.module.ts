import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AppHeroe } from './heroe/app-heroes.component';
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations: [
        AppHeroe,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {

}