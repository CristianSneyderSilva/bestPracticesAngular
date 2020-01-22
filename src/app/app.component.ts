import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public usuarios = [];

  public noticias = [];
  public filtroValor = '';
  title = 'contador';
  public marcaSeleccionada = 'volvo';

  public marcas: string[] = ['volvo', 'mercedes'];

  constructor(
    private _http: HttpClient){
  }

  ngOnInit(): void {
    this.marcas = this.marcas;
    this._http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((users: any[]) => this.usuarios = users);

    //Obtener noticias
    this._http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe((notic: any[]) => this.noticias = notic);
  }

  handleSearch(value) {
    this.filtroValor = value;
  }

}
