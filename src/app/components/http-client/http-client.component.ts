import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {

  constructor(
    private _http: HttpClient
  ) {

    /*GET */
    /*
    this._http.get('https://jsonplaceholder.typicode.com/users', {
      headers:{
          'Content-Type' : 'application/json'
        }
    })
      .subscribe(
        data => {
          console.log('Data', data);
        },
        (err: HttpErrorResponse) => {
          console.log('Error', err.message);
        },
        () => console.log('Peticion finalizada'));
        */

    /* POST */
    /*
    let form = new FormData();
    form.append('archivo', 'texto')
    this._http.post('https://jsonplaceholder.typicode.com/users', form, {
      headers: {
        'Content-type': 'multipart/form-data'
      }
    })
    .subscribe(
      data => {
        console.log('Data', data);
      },
      (err: HttpErrorResponse) => {
        console.log('Error', err.message);
      },
      () => console.log('Peticion finalizada'));
      */
     let form = new FormData();
     form.append('archivo', 'texto')
     this._http.delete('https://jsonplaceholder.typicode.com/users',{
       params: {
         id: '1'
       }
     })
     .subscribe(
       data => {
         console.log('Data', data);
       },
       (err: HttpErrorResponse) => {
         console.log('Error', err.message);
       },
       () => console.log('Peticion finalizada'));

  }

  ngOnInit() {
  }

}
