import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManyButtonsModule } from './buttons/manybuttons.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ManyButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
