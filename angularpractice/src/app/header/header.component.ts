import { Component } from '@angular/core'; // all the angular directves and core concept of angular

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  template: '<h1>ekart</h1>',
  styleUrls: ['./header.component.css']
}) // meta data object and its property and value
// selector :- property value : 'app-header'
export class HeaderComponent {

}
