import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-voice-control',
  templateUrl: './voice-control.component.html',
  styleUrls: ['./voice-control.component.css'],
  providers: [MessageService],
})
export class VoiceControlComponent implements OnInit {
  @ViewChild('op1') op1: OverlayPanel | undefined;
  @ViewChild('op2') op2: OverlayPanel | undefined;
  @ViewChild('op3') op3: OverlayPanel | undefined;
  @ViewChild('op4') op4: OverlayPanel | undefined;
  @ViewChild('target') target: ElementRef | undefined;
  constructor() {}
  ngOnInit() {
  }

  volumeUp() {
    console.log('Volume++');
  }
  volumeDown() {
    console.log('Volume--');
  }
  togglePanels(event: MouseEvent){
    this.op1?.toggle(event, this.target?.nativeElement);
    this.op2?.toggle(event, this.target?.nativeElement);
    this.op3?.toggle(event, this.target?.nativeElement);
    this.op4?.toggle(event, this.target?.nativeElement);
  }

  turnOnLights(){
    console.log("lights on")
  }
  turnOffLights(){
    console.log("lights on")
  }
  turnOnFan(){
    console.log("fan on")
  }
  turnOffFan(){
    console.log("fan off")
  }
}
