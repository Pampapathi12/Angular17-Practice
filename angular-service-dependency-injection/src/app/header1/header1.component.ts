import { Component } from '@angular/core';
import { SubscribeService } from '../Serive/subscribe.service';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component {


  selectedTab: string = 'home';

  HomeClicked(){

  }

  AdminClicked(){
    this.selectedTab = 'admin';

  }

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
    // pass the parementer to server
    subService.OnSubscribeClicked('Monthly')

  }

}
