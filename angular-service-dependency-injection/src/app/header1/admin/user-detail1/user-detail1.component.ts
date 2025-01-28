import { Component, inject, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Serive/user.service';
import { USER_TOKEN } from 'src/app/app.module';

@Component({
  selector: 'app-user-detail1',
  templateUrl: './user-detail1.component.html',
  styleUrls: ['./user-detail1.component.css']
})
export class UserDetail1Component implements OnInit {

  selectedUser: User | null = null;

  userService = inject(USER_TOKEN)// 
  // we want subscribe the data when event emit happen;
  // event is emitted to be notified about that we need to subscribe event-> need to create the instance

  ngOnInit() {

    // whenever event is emmited thie compoentn is notified about it becuase using the subscribe compoennt
    // behind the the scen observable is being used, when ever event happen it is going to emit an observable
    // we are subcribing the obsevable

    this.userService.OnUserDetailsClicked.subscribe((data: User) =>{

      this.selectedUser = data;

      console.log('selected user', this.selectedUser)

      // callback function will executed when OnUserDetailsClicked event is raised and emit the data, that data as argmunent to the call back function


    })

    // whenever OnUserDetailsClicked raised here subscribe calling and subscribe the data
    // whenever OnUserDetailsClicked raised it is going to emit the user details, when event raised get the data from the callback function subscribe  to get the data as argument of callback function

    
  }

}
