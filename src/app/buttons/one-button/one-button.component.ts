import { Component } from '@angular/core';

@Component({
  selector: 'app-one-button',
  templateUrl: './one-button.component.html',
  styleUrls: ['./one-button.component.css']
})
export class OneButtonComponent {
  testClick(num: number){
    console.log(num +  " clicked.");
  }
}
