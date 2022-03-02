import { Component } from "@angular/core";

@Component ({
    selector: 'app-contador',
    templateUrl: './app-contador.component.html',
})

export class AppContador {
    base: number = 5;
    numero: number = 10;

    acumulativo(valor: number) : void {
       this.numero += valor;
    }

}