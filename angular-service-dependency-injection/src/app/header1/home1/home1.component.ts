import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Serive/subscribe.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css'],
  // providers:[SubscribeService]//// instance of service into header compoennt and same instance can available child compoennt
})
export class Home1Component {

}
