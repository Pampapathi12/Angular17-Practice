import { Component } from '@angular/core';

import { SubscribeService } from 'src/app/Serive/subscribe.service';

@Component({
  selector: 'app-hero1',
  templateUrl: './hero1.component.html',
  styleUrls: ['./hero1.component.css'],
  providers: [SubscribeService]
})
export class Hero1Component {

  constructor(private service: SubscribeService){

  }


  // OnSubscribe(){

  //   // this.selectedTab = 'admin';

  //   // add user to database
  //   // send email with subscription detail
  //   // allow user to access the services

  //   // notification => u have benn subscribed
  //   alert('thank u for subscribing, you can access the the services now')

  // }

   OnSubscribe(){
  
  
      let params = ""
      // this.selectedTab = 'admin';
  
      // add user to database
      // send email with subscription detail
      // allow user to access the services
  
      // notification => u have benn subscribed
      // alert('thank u for subscribing, you can access the the services now')
  
      // creating instance of service class
  
      // let subService = new SubscribeService();
      // pass the parementer to server
      // subService.OnSubscribeClicked('Monthly')

      this.service.OnSubscribeClicked('hero')
  
    }

}
