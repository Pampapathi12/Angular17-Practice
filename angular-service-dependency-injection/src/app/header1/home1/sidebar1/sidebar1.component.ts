import { Component } from '@angular/core';

import { SubscribeService } from 'src/app/Serive/subscribe.service';

@Component({
  selector: 'app-sidebar1',
  templateUrl: './sidebar1.component.html',
  styleUrls: ['./sidebar1.component.css']
})
export class Sidebar1Component {


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
  
      let subService = new SubscribeService();

      // inject or instance of the service sbscribe class into hero compoennt then its call it has depedenciy injection
      // pass the parementer to server
      subService.OnSubscribeClicked('quaterly')
  
    }

}
