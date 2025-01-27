import { Component } from '@angular/core';
import { UserService } from 'src/app/Serive/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  // providers:[UserService] // component level adding the service depedency injection// in the service file not using @injectable decorator and not adding the this service in the module level
  // using th providers in the parent component we can access the this service once we use the providers
})
export class AdminComponent {


  constructor(private userService: UserService){

  }

  name: string = '';
  gender: string = 'Male';
  subType: string = 'yearly';
  status: string = 'Active'  

  CreateNewUser(){
    this.userService.CreateUser(this.name,
      this.gender,
      this.subType,
      this.status,)

      console.log('admin', this.userService.users)
  }




}
