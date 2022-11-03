import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-topo',
  templateUrl: './menu-topo.component.html',
  styleUrls: ['./menu-topo.component.css']
})
export class MenuTopoComponent implements OnInit {
  estaAutenticado : boolean = true;
  menus : any = [
    { rota:'calcular-media', titulo:'Calcular Media' },
    { rota:'calculadora', titulo:'Calculadora' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
