import { Component } from '@angular/core';
import { DateService } from '../services/date.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public currDate: Date;
  constructor(dateService: DateService) {
    this.currDate = dateService.GetCurrentDate();
    
  }
}
