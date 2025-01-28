import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 

  title = 'angular-observable';
  data: any [] = [];

  // 1 . create an observable


  // Observable
// event emitter
  myObservable = new Observable((observer)=>{
    // observer.next([1,2,3,4,5]);

    // emit the stream data
    // observer.next(1);
    // observer.next(2);
    // observer.next(3);
    // observer.next(4);
    // observer.next(5);

    setTimeout(() =>{
      observer.next(1); // this data will emit the value after the one second
    },1000) 
    setTimeout(() =>{
      observer.next(2); // this data will emit the value after the two second
    },2000) 
    setTimeout(() =>{
      observer.next(3); // this data will emit the value after the three second
    },3000) 
    setTimeout(() =>{
      observer.next(4); // this data will emit the value after the four second
    },4000) 
    setTimeout(() =>{
      observer.next(5); // this data will emit the value after the five second
    },5000) 

    // observer.next(2);
    // observer.next(3);
    // observer.next(4);
    // observer.next(5);


    // here myObservable     emit the next event
    // alos obsevable stream data

  })

 

  //observer parameter using the call back function, injected by rxjs by using call back function
  // subscriber , going to subscribe   myObservable going to recieve the those subscriber observer paremert
  // observer if u want emit some value , call next method
  // observable only emit the only if there i any subscriber

  // 2  create the subscriber
  // we want subscribe the myObservable

  GetAsyncData(){

    // this.service.ViewEmpAppraisalDocument(data).subscribe((res)
    // observer will notify when the event emmiter

    // myObservable event listner, this code will notify that
    this.myObservable.subscribe((val:any) =>{

      // observer -> this.myObservable.subscribe
      

      // pushing the value into the array

      this.data.push(val);

    //  [((val:any) =>{
      

      // pushing the value into the array

    //  this.data.push(val);] event handler

    });

    


    // in order to handle the event from next event from the observable to subscribe method we need to pass call back function in subscribe

    // this subscribe method , next,error,complete
    // this call back function will execute whenever observable event emits the next event
    // whenever error 
    // whenver complete
    // this call  back function receive the value from observable next event as emittef
  }

  // 1. event emmiter, 2. event listner, 3. event handler

  // Observable() -> constructor


}
