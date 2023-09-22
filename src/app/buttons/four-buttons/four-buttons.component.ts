import { Component } from '@angular/core';
import { ControlService } from '../control.service';
import { InteractService } from 'src/app/interact.service';

@Component({
  selector: 'app-four-buttons',
  templateUrl: './four-buttons.component.html',
  styleUrls: ['./four-buttons.component.css']
})
export class FourButtonsComponent {
  clickedButtons = this.controlService.fourButtons;
  constructor(private controlService: ControlService, private interactService: InteractService) {}
  testClick(num: number){
    console.log(num +  " clicked.");
    this.clickedButtons[num] = !this.clickedButtons[num];
    this.controlService.fourButtons = this.clickedButtons;

    switch (num){
      case 0 :{
        if(this.clickedButtons[num]){
          this.interactService.addToLightOnList('mainBedroom')
          this.interactService.lightOn('mainBedroom')
        }else{
          this.interactService.removeLightOnList('mainBedroom')
          this.interactService.lightOff('mainBedroom')
        }
        break;
      }
      case 1:{
        if(this.clickedButtons[num]){
          this.interactService.addToFanOnList('mainBedroom')
          this.interactService.fansOn('mainBedroom')
        }else{
          this.interactService.removeFanOnList('mainBedroom')
          this.interactService.fansOff('mainBedroom')
        }
        break;
      }


    }
  }
}
