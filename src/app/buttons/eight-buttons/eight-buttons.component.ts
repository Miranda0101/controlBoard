import { Component } from '@angular/core';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-eight-buttons',
  templateUrl: './eight-buttons.component.html',
  styleUrls: ['./eight-buttons.component.css']
})
export class EightButtonsComponent {
  clickedButtons = this.controlService.eightButtons;
  constructor(private controlService: ControlService) {}
  testClick(num: number){
    console.log(num +  " clicked.");
    this.clickedButtons[num] = !this.clickedButtons[num];
    this.controlService.eightButtons = this.clickedButtons;
  }
}
