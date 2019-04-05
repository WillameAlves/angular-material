import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesteComponenteComponent } from './teste-componente/teste-componente.component';



@NgModule({
  declarations: [
    CommonModule
  ],
  imports: [
    TesteComponenteComponent
  ],
  exports: [
    TesteComponenteComponent 
  ]
})
export class TesteModuloModule { }
