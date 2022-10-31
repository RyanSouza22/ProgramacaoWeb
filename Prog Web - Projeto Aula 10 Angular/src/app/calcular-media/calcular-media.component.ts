import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrls: ['./calcular-media.component.css']
})
export class CalcularMediaComponent implements OnInit {

  constructor(public route : ActivatedRoute) { }

  ac1: number;
  ac2: number;
  ag: number;
  af: number;
  resultado: number;
  aprovado: String;

  ngOnInit(): void {
  }

  calcularMedia(){
    this.resultado = (this.ac1 * 0.15) + (this.ac2 *0.30) + (this.ag * 0.10) + (this.af * 0.45);

    if(this.resultado >= 5){
      this.aprovado = "Aprovado!"
    } else {
      this.aprovado = "Reprovado!"
    }
  }

}
