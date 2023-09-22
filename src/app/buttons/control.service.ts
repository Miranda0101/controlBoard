import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  oneButton = false;
  fourButtons: boolean[] = [false, false, false, false];
  eightButtons: boolean[] = [false, false, false, false,false, false, false, false];
  constructor() { }
}
