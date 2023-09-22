import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-voice-control',
  templateUrl: './voice-control.component.html',
  styleUrls: ['./voice-control.component.css'],
})
export class VoiceControlComponent implements OnInit {
  @ViewChild('op1') op1: OverlayPanel | undefined;
  @ViewChild('op2') op2: OverlayPanel | undefined;
  @ViewChild('op3') op3: OverlayPanel | undefined;
  @ViewChild('op4') op4: OverlayPanel | undefined;
  @ViewChild('target') target: ElementRef | undefined;
  constructor(private renderer: Renderer2) {}
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
    console.log("lights on");
    this.op1?.hide();
  }
  turnOffLights(){
    console.log("lights off")
    this.op2?.hide();
  }
  turnOnFan(){
    console.log("fan on")
    this.op3?.hide();
  }
  turnOffFan(){
    console.log("fan off")
    this.op4?.hide();
  }
}
