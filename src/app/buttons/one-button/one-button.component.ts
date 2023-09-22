import { Component } from '@angular/core';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-one-button',
  templateUrl: './one-button.component.html',
  styleUrls: ['./one-button.component.css']
})
export class OneButtonComponent {
  buttonClicked = this.controlService.oneButton;
  constructor(private controlService: ControlService){ }
  testClick(num: number){
    console.log(num +  " clicked.");
    this.buttonClicked = !this.buttonClicked;
    this.controlService.oneButton = this.buttonClicked;
  }
}
