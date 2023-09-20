import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  tabIndex = 3;

  changeTab(index: number) {
    this.tabIndex = index;
  }
}
