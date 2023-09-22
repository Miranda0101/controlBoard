import { Component } from '@angular/core';
import { InteractService } from 'src/app/interact.service';

@Component({
  selector: 'app-lightness',
  templateUrl: './lightness.component.html',
  styleUrls: ['./lightness.component.css']
})
export class LightnessComponent {
  constructor(private interactService: InteractService){}
  lightness: number = 0;
  chooseLightness(num: number){
    
    this.lightness = num;
    this.interactService.lightIntensity.next(num)
    console.log("Current lightness: ", this.lightness);
  }
}
