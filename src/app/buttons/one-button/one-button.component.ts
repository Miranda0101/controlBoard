import { Component, OnInit } from '@angular/core';
import { ControlService } from '../control.service';
import { InteractService } from 'src/app/interact.service';

@Component({
  selector: 'app-one-button',
  templateUrl: './one-button.component.html',
  styleUrls: ['./one-button.component.css']
})
export class OneButtonComponent{


  buttonClicked = this.controlService.oneButton;
  constructor(private controlService: ControlService, private interactService: InteractService) { }


  toggleMainPower() {

    this.buttonClicked = !this.buttonClicked;
    this.controlService.oneButton = this.buttonClicked;

    console.log(this.interactService.allOnFans);
    console.log(this.interactService.allOnLights)
    

    if(this.buttonClicked){
      this.interactService.fanGrp.next({list:this.interactService.allOnFans, isOn:true});
      this.interactService.lightGrp.next({list:this.interactService.allOnLights, isOn:true});
    }else{
      this.interactService.fanGrp.next({list:this.interactService.allOnFans, isOn:false});
      this.interactService.lightGrp.next({list:this.interactService.allOnLights, isOn:false});
    }

  }
}
