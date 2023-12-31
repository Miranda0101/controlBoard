import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EightButtonsComponent } from './eight-buttons/eight-buttons.component';
import { FourButtonsComponent } from './four-buttons/four-buttons.component';
import { OneButtonComponent } from './one-button/one-button.component';
import { VoiceControlComponent } from './voice-control/voice-control.component';
import { LightnessComponent } from './lightness/lightness.component';
import { ButtonsComponent } from './buttons.component';
import { DividerModule } from 'primeng/divider';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ControlService } from './control.service';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [
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
    ButtonModule,
    FormsModule,
    MenuModule
  ],
  exports: [
    ButtonsComponent
  ],
  providers: [ControlService]
})
export class ManyButtonsModule { }
