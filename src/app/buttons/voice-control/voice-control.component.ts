import { Component } from '@angular/core';

@Component({
  selector: 'app-voice-control',
  templateUrl: './voice-control.component.html',
  styleUrls: ['./voice-control.component.css']
})
export class VoiceControlComponent {
  volumeUp(){
    console.log("Volume++");
  }
  volumeDown(){
    console.log("Volume--");
  }
  micOff(){
    console.log("mic turned off");
  }
  micOn(){
    console.log("mic turned on");
  }
}

