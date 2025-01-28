import { Component, Inject, Injectable } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Serive/user.service';
import { USER_TOKEN } from 'src/app/app.module';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  // providers:[UserService] // this is component level


  // VVVIMP if we are creating the providers:[UserService]  in child compoennt when the admin compoent added the data
  // that time we will not get update data , bacause, admin userservice instance and user-list userservice are different so, that
  // once the parent compoent inject the providers no need to inject the same service because it create the seperate instance
})
export class UserListComponent {



  // in ther user-list and user-detail doesnt have any parent child relationship, 2 compoent are siblings of admin folder


  // userList: any = []


  constructor(@Inject(USER_TOKEN) private userSerive: UserService ){
    
  }

  userList = this.userSerive.GetAllUsers();

  ShowUserDetail(user:User){


    this.userSerive.OnShowUserDetails(user);

    // we want emit the data when the mthod called

  }
  // ngOnInit(){
  //   this.userList = this.userSerive.GetAllUsers();

  //   console.log('service', this.userList)
  // }

}
