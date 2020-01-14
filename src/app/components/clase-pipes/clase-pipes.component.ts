import { Component, OnInit } from '@angular/core';
import {UppercasePipe} from '../pipes/uppercase.pipe';
@Component({
  selector: 'app-clase-pipes',
  templateUrl: './clase-pipes.component.html',
  styleUrls: ['./clase-pipes.component.scss'],
  providers: [UppercasePipe]
})

export class ClasePipesComponent implements OnInit {

  lista = [{
    id: 1,
    nombre: 'cristian',
    precio: 23.65

  }, {
    id: 2,
    nombre: 'juan',
    precio: 32.56

  },{
    id: 3,
    nombre: 'andres',
    precio: 30.56

  }];
  constructor(
    private _upper : UppercasePipe
  ) { }


  ngOnInit() {
    alert(this._upper.transform(this.lista[1].nombre))
  }

}
