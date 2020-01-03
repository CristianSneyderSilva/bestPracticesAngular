import { Injectable } from '@angular/core';
import { User } from '../other/interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user:User
}
