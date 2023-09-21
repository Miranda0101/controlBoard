import { Component } from '@angular/core';

@Component({
  selector: 'app-eight-buttons',
  templateUrl: './eight-buttons.component.html',
  styleUrls: ['./eight-buttons.component.css']
})
export class EightButtonsComponent {
  clickedButtons: boolean[] = [false, false, false, false,false, false, false, false];
  testClick(num: number){
    console.log(num +  " clicked.");
    this.clickedButtons[num] = !this.clickedButtons[num];
  }
}
