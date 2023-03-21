import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private service: JogoDaVelhaService) {}

  ngOnInit(): void {
    this.service.inicializar();
  }

  get showInicio(): boolean {
    return this.service.showInicio;
  }

  get showTabuleiro(): boolean {
    return this.service.showTabuleiro;
  }

  get showFinal(): boolean {
    return this.service.showFinal;
  }

  iniciarJogo(): void {
    this.service.iniciarJogo();
  }

}
