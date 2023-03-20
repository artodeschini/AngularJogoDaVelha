import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';



@NgModule({
  declarations: [
    JogoDaVelhaComponent
  ],
  imports: [
    CommonModule
  ],
  // necessario pois nao trabalharei com rotas
  // caso nao adicionado nao podera ser visualizado no app principal
  exports: [
    JogoDaVelhaComponent
  ]
})
export class JogoDaVelhaModule { }
