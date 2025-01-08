import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  // name: string = 'IPhone';
  // price: number = 999;
  // color: string = 'Red'
  name="pampapathi"

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


}


