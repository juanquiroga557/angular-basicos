import { Component } from "@angular/core";

@Component ({
    selector: 'app-heroe',
    templateUrl: './app-heroes.component.html',
})
export class AppHeroe {
    nombre: string = "Flash";
    edad: number = 21;
    universo: string = "DC";

    cambiarNombre() : string {
        return this.nombre = "Spiderman";
    }

    funcion() {
        return `${ this.nombre } - ${ this.edad }`;
    }

    get capitalizado() : string {
        return this.nombre.toUpperCase();
    }
    
}