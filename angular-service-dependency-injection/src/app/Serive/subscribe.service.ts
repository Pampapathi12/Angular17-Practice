import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class SubscribeService {

  constructor() { }

  // constructor(name: string) { }

  // here using the constructor parameter, it will get the error in the wherever service using
  // becasue there paremter not passing

  OnSubscribeClicked( type:string){

    // this.selectedTab = 'admin';

    // add user to database
    // send email with subscription detail
    // allow user to access the services

    // notification => u have benn subscribed
    alert('thank u for '+type+' subscribing, you can access the the services now')

  }
}
