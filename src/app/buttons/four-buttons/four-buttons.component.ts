import { Component } from '@angular/core';

@Component({
  selector: 'app-four-buttons',
  templateUrl: './four-buttons.component.html',
  styleUrls: ['./four-buttons.component.css']
})
export class FourButtonsComponent {
  testClick(num: number){
    console.log(num +  " clicked.");
  }
}
