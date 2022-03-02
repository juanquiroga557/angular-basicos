import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppContador } from "./contador/app-contador.component";

@NgModule({
    declarations: [
        AppContador
    ],
    imports: [
        // CommonModule
    ],
    exports: [
        AppContador
    ]
})
export class ContadorModule {

}