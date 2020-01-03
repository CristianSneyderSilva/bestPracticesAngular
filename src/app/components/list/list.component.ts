import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {


  usuarios = [];

  constructor(
    private _httpClient :  HttpClient
    ) { }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos(){
    this._httpClient.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((datos:any[]) => this.usuarios = datos)
  }
  /*
  borrarUsuario(id:number){

    console.log("id", id);

    this.usuarios = this.usuarios.filter(usuario => usuario.id !== id );
  }
  */
}
