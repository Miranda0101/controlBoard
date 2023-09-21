import { Component } from '@angular/core';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-four-buttons',
  templateUrl: './four-buttons.component.html',
  styleUrls: ['./four-buttons.component.css']
})
export class FourButtonsComponent {
  clickedButtons = this.controlService.fourButtons;
  constructor(private controlService: ControlService) {}
  testClick(num: number){
    console.log(num +  " clicked.");
    this.clickedButtons[num] = !this.clickedButtons[num];
    this.controlService.fourButtons = this.clickedButtons;
  }
}
