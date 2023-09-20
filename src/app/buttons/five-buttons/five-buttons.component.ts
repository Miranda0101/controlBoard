import { Component } from '@angular/core';

@Component({
  selector: 'app-five-buttons',
  templateUrl: './five-buttons.component.html',
  styleUrls: ['./five-buttons.component.css']
})
export class FiveButtonsComponent {
  testClick(num: number){
    console.log(num +  " clicked.");
  }
}
