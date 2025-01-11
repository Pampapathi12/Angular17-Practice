import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class containerComponent {

  listOfString: string[] = ['mark', 'steve', 'reddy', 'manoj', 'pampapathi']

  // name: string = 'IPhone';
  // price: number = 999;
  // color: string = 'Red'
  name="pampapathi reddy"
  addToCart: number = 0;

  product = {
    name: 'Iphone X',
    price: 789,
    color: 'Black',
    discount: 8.5,
    inStock: 5,
    pImage: '/assets/images/iphone.png'
  }


  getDiscountPrice(){
   return this.product.price - (this.product.price * this.product.discount / 100)
  }
  onNameChange(event: any){
    console.log((event.target ).value)
    this.name = (event.target ).value;
  }
  decrementCartValue(){
    if(this.addToCart > 0){
      this.addToCart--;
    }
   
  }
  incrementCartValue(){
    if(this.addToCart < this.product.inStock){
    this.addToCart++;
    }
  }


}


