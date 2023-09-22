import { Component } from '@angular/core';
import { ControlService } from '../control.service';
import { InteractService } from 'src/app/interact.service';

@Component({
  selector: 'app-eight-buttons',
  templateUrl: './eight-buttons.component.html',
  styleUrls: ['./eight-buttons.component.css']
})
export class EightButtonsComponent {
  clickedButtons = this.controlService.eightButtons;
  constructor(private controlService: ControlService,
    private interactService: InteractService) { }
  testClick(num: number) {
    console.log(num + " clicked.");
    this.clickedButtons[num] = !this.clickedButtons[num];
    this.controlService.eightButtons = this.clickedButtons;

    switch (num) {
      case 0: {
        if (this.clickedButtons[num]) {
          this.interactService.addToLightOnList('secondBedroom')
          this.interactService.lightOn('secondBedroom')
        } else {
          this.interactService.removeLightOnList('secondBedroom')
          this.interactService.lightOff('secondBedroom')
        }
        break;
      }
      case 1: {
        if (this.clickedButtons[num]) {
          this.interactService.addToLightOnList('secondBathroom')
          this.interactService.lightOn('secondBathroom')
        } else {
          this.interactService.removeLightOnList('secondBathroom')
          this.interactService.lightOff('secondBathroom')
        }
        break;
      } case 2: {
        if (this.clickedButtons[num]) {
          this.interactService.addToLightOnList('thirdBedroom')
          this.interactService.lightOn('thirdBedroom')
        } else {
          this.interactService.removeLightOnList('thirdBedroom')
          this.interactService.lightOff('thirdBedroom')
        }
        break;
      } case 3: {
        if (this.clickedButtons[num]) {
          this.interactService.addToLightOnList('thirdBathroom')
          this.interactService.lightOn('thirdBathroom')
        } else {
          this.interactService.removeLightOnList('thirdBathroom')
          this.interactService.lightOff('thirdBathroom')
        }
        break;
      } case 4: {
        if (this.clickedButtons[num]) {
          this.interactService.addToLightOnList('forthBedroom')
          this.interactService.lightOn('forthBedroom')
        } else {
          this.interactService.removeLightOnList('forthBedroom')
          this.interactService.lightOff('forthBedroom')
        }
        break;
      } case 5: {
        if (this.clickedButtons[num]) {
          this.interactService.addToLightOnList('lounge')
          this.interactService.lightOn('lounge')
        } else {
          this.interactService.removeLightOnList('lounge')
          this.interactService.lightOff('lounge')
        }
        break;
      } case 6: {
        if (this.clickedButtons[num]) {
          this.interactService.addToLightOnList('livingRoom')
          this.interactService.lightOn('livingRoom')
        } else {
          this.interactService.removeLightOnList('livingRoom')
          this.interactService.lightOff('livingRoom')
        }
        break;
      } case 7: {
        if (this.clickedButtons[num]) {
          this.interactService.addToLightOnList('Kitchen')
          this.interactService.lightOn('Kitchen')
        } else {
          this.interactService.removeLightOnList('Kitchen')
          this.interactService.lightOff('Kitchen')
        }
        break;
      }

    }
  }
}