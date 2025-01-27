import { Component } from '@angular/core';
import { UserService } from 'src/app/Serive/user.service';

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


  // userList: any = []


  constructor(private userSerive: UserService ){
    
  }

  userList = this.userSerive.GetAllUsers();
  // ngOnInit(){
  //   this.userList = this.userSerive.GetAllUsers();

  //   console.log('service', this.userList)
  // }

}
