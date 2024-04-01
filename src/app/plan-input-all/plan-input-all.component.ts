import { Component } from '@angular/core';
import { HomeService } from '../shared/home.service';

@Component({
  selector: 'app-plan-input-all',
  templateUrl: './plan-input-all.component.html',
  styleUrls: ['./plan-input-all.component.css']
})
export class PlanInputAllComponent {
  trip: any = {}; // Object to hold form field values

  constructor(private homeService: HomeService) { }

  submitData(postDataForm: any): void {
    if (postDataForm.valid) {
      this.homeService.postTrip(this.trip).subscribe(
        response => {
          console.log('Data posted successfully:', response);
          // Optionally, reset the form after successful submission
          postDataForm.reset();
        },
        error => {
          console.error('Error posting data:', error);
        }
      );
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }
}
