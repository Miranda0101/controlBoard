import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiveButtonsComponent } from './five-buttons/five-buttons.component';
import { EightButtonsComponent } from './eight-buttons/eight-buttons.component';
import { FourButtonsComponent } from './four-buttons/four-buttons.component';
import { OneButtonComponent } from './one-button/one-button.component';
import { VoiceControlComponent } from './voice-control/voice-control.component';
import { LightnessComponent } from './lightness/lightness.component';
import { ButtonsComponent } from './buttons.component';
import { DividerModule } from 'primeng/divider';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    FiveButtonsComponent,
    EightButtonsComponent,
    FourButtonsComponent,
    OneButtonComponent,
    VoiceControlComponent,
    LightnessComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    DividerModule,
    ToolbarModule,
    ButtonModule
  ],
  exports: [
    ButtonsComponent
  ]
})
export class ManyButtonsModule { }
