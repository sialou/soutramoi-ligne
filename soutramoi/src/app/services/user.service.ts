import { Injectable } from '@angular/core';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users:Users[]=[]

  constructor() { }

  getUsers(){

    return this.users
  }
  editUser(user_id:number,user: Users){

  }

  addUser(user: Users){

  }
}
