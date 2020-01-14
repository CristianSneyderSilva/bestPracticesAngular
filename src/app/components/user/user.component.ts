import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Host
} from "@angular/core";
import { ListComponent } from "../list/list.component";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  @Input("data") user: any;

  /* Envio de datos al padre*/
  /*
  @Output() borrar = new EventEmitter<number>()
*/

  constructor(
    /*El decorador host permite obtener datos del padre en el hijo
      Se debe crear una variable que contenta el componente padre
    */
    @Host() private _app: ListComponent
  ) { }

  ngOnInit() { }

  /*Envio de datos al padre*/
  /*
  borrarDato(id:number){
    console.log("id", id);
    this.borrar.emit(id);

  }
  */
  /* Realizar accion en el hijo directamente obteniendo el objeto del padre*/
  borrarUsuario(id: number) {
    console.log('id', id);
    this._app.usuarios = this._app.usuarios.filter(
      usuario => usuario.id !== id
    );
  }
}
