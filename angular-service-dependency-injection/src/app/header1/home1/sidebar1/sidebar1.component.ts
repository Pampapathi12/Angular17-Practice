import { Component } from '@angular/core';

import { SubscribeService } from 'src/app/Serive/subscribe.service';

@Component({
  selector: 'app-sidebar1',
  templateUrl: './sidebar1.component.html',
  styleUrls: ['./sidebar1.component.css'],
  providers: [SubscribeService] // multiple dependency we can use tell to angular what type dependency injections
})
export class Sidebar1Component {

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
  
      // let subService = new SubscribeService();// paremeter less constructor and instance

      // inject or instance of the service sbscribe class into hero compoennt then its call it has depedenciy injection
      // pass the parementer to server
      // subService.OnSubscribeClicked('quaterly')


      // which type instaces angular has to  inject 
      // we need to tell angular
      this.service.OnSubscribeClicked('quaterly')


      // tightly coupled in angular crating using the instnce and caling the constructor
  
    }

}
