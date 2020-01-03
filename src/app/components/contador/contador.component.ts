import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  contador = 0;
  constructor() { }

  ngOnInit() {
  }

  positivo() {
    this.contador++;
  }
  negativo() {
    this.contador--;
  }
  reiniciar() {
    this.contador = 0;
  }
}
