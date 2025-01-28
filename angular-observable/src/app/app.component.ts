import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { from, fromEvent, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

 

  title = 'angular-observable';
  data: any [] = [];

  // of operator create a observable

  array1 = [1,3,5,7,9]
  array2 = ['A', 'B','C','D']


  myObservable1 = of(this.array1, this.array2, 20,30,'hello')
  promiseData = new Promise((resolve, reject) =>{
    resolve([10,20,30,40,50])
  })

  // convert promise to observable
 


  // from operator
  myObservable2 = from(this.promiseData)

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
  //   this.myObservable.subscribe((val:any) =>{

    

  //     this.data.push(val);
     


  //   },// second call back functon for the error handling
  //     (err) => {

  //       alert(err.message)

  //   },
  // () =>{

  //   alert('all the data subscribed')

  // });


  this.myObservable1.subscribe({
    next:(val: any) => {
      this.data.push(val) 
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


  GetAsyncData1(){

   
    this.myObservable1.subscribe((val:any) =>{

      // once all the data emit then emit the complete signla
      // here of operator streaming the data one after the another

      // here first data will come and after that complete signal immediate invoking


      this.data.push(val);
    },
      (err) => {

        alert(err.message)

    },
  () =>{

    alert('all the data subscribed')

  });


  }

  GetAsyncData2(){

   
    this.myObservable2.subscribe((val:any) =>{

     

      this.data.push(val);

      console.log(this.data)// from operator take each element and iterator one after one the printing
    },
      (err) => {

        alert(err.message)

    },
  () =>{

    alert('all the data subscribed')

  });


  }




  // 1. event emmiter, 2. event listner, 3. event handler

  // Observable() -> constructor

// how to create an observable from the dom events, we can use the fromevent operator
@ViewChild('createbutton')
createBtn: ElementRef;
createBtnObs;

buttonClicked(){ // calling this method after ngafterviewinit life cycle
  // from event is rxjs operator, in that we need pass the 2 argument one target event element and target listen argumwnt
  let count = 0;
this.createBtnObs =  fromEvent(this.createBtn.nativeElement, 'click')// it return as observable
.subscribe((data) =>{
  console.log('data', data)
  this.showItem(count++);
})
}

ngAfterViewInit(){
  this.buttonClicked();
}

showItem(val){
 let div = document.createElement('div');

 div.innerText = 'Item' + val;
 div.className = 'data-list'
 document.getElementById('container').appendChild(div)

}




}
