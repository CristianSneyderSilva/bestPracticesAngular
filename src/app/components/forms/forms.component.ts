import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  signupForm: FormGroup

  constructor(
    private _builder: FormBuilder
  ) { }

  ngOnInit() {
    this.signupForm = this._builder.group({
      nombre: ['',],
      usuario: ['',Validators.required],
      email: ['',Validators.compose([Validators.email,Validators.required])],
      pwd: ['',Validators.required]
    })
  }
  enviar(values){
    console.log(values);
  }
}
