import { Component } from '@angular/core';

@Component({
  selector: 'app-lightness',
  templateUrl: './lightness.component.html',
  styleUrls: ['./lightness.component.css']
})
export class LightnessComponent {
  lightness: number = 0;
  chooseLightness(num: number){
    this.lightness = num;
    console.log("Current lightness: ", this.lightness);
  }
}
