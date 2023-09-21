import { Component } from '@angular/core';

@Component({
  selector: 'app-lightness',
  templateUrl: './lightness.component.html',
  styleUrls: ['./lightness.component.css']
})
export class LightnessComponent {
  lightness: number = 0;
  chooseLightness(){
    console.log(this.lightness);
  }
}
