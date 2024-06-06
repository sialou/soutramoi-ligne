import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-prestataire-detail',
  templateUrl: './prestataire-detail.component.html',
  styleUrls: ['./prestataire-detail.component.css']
})
export class PrestataireDetailComponent implements OnInit {

  users: Users[]=[]

constructor(private userService: UserService ){

}
  ngOnInit(): void{

    this.users= this.userService.getUsers()
  }

}
