import { Component } from '@angular/core'; // all the angular directves and core concept of angular

@Component({
  selector: 'app-header',
  // template: '<h1>ekart</h1>', // if less line of code the use the template
  templateUrl: './header.component.html', // nned specify the path of the html
 
  styleUrls: ['./header.component.css']
}) // meta data object and its property and value
// selector :- property value : 'app-header'
export class HeaderComponent {

}
