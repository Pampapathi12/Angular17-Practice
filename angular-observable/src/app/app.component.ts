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

     // observable  also emit the error 

    //  setTimeout(() =>{
    //   observer.error(new Error('something went wrong, plrase try again later')); // this data will emit the value after the three second
    // },3000) 
    //***once  after that error occured observable not going emit any more value
    // once the error signal occured ten other data will not emit and completion signal also not emit


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


    // complete signal from observable, it doesnot take any argument
    setTimeout(() =>{
      observer.complete(); // this data will emit the value after the five second
    },6000) 

    // setTimeout(() =>{
    //   observer.complete(); // this data will emit the value after the five second
    // },3000) 
    // once complettion  signal emited data completed if any data not emitthat data not emit value to for subscribe


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
    // here subscribe is  deprecated
    this.myObservable.subscribe((val:any) =>{

      // 3 call back function pass
      // next, error, completion

      // observer -> this.myObservable.subscribe
      

      // pushing the value into the array

      this.data.push(val);// first call back functoin, recive the emit the value and subscribe
     

    //  [((val:any) =>{
      

      // pushing the value into the array

    //  this.data.push(val);] event handler

    },// second call back functon for the error handling
      (err) => {

        alert(err.message)

    },
  () =>{

    alert('all the data subscribed')

  });


  this.myObservable.subscribe({
    next:(val: any) => {
      this.data.push(val) // Property 'data' does not exist on type 'Partial<Observer<unknown>> | ((value: unknown) => void)'. Property 'data' does not exist on type 'Partial<Observer<unknown>>
      // => using arrow function this key will point the outer scop
    },
    error(err){
      alert(err.message)
    },
    complete(){
      alert('all data completed')
    }
  })

    


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
