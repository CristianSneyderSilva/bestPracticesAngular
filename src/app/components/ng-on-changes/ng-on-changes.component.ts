import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes',
  templateUrl: './ng-on-changes.component.html',
  styleUrls: ['./ng-on-changes.component.scss']
})
export class NgOnChangesComponent implements OnInit, OnChanges {


  @Input() marca: string;

  data = [{
    marca: 'volvo', valor: 10
  }, {
    marca: 'volvo', valor: 50
  }, {
    marca: 'mercedes', valor: 20
  }, {
    marca: 'mercedes', valor: 70
  }];

  public datos: object[];
  public total: number = 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.marca.currentValue != changes.marca.previousValue) {

      const nuevaMarca = changes.marca.currentValue;
      const dataFilter = this.data.filter(dato => dato.marca === nuevaMarca);

      this.total=0;

      dataFilter.forEach(datos => this.total += datos.valor);

      console.log(dataFilter);

    }

  }

}
