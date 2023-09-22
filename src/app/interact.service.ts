import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractService {

  constructor() { }

  roomLightMapping: any = {
    mainBedroom: ["Main Bedroom Light1", "Main Bedroom Light2", "Main Bedroom Light3", "Main Bedroom Bath Light1", "Main Bedroom Bath Light2"],
    secondBedroom: ["Secondary Bedroom Light1"],
    secondBathroom: ["Secondary Bedroom Bath Light1"],
    thirdBedroom: ["Secondary Bedroom Light2"],
    thirdBathroom: ["Secondary Bedroom Bath Light2"],
    forthBedroom: ["Secondary Bedroom Light3"],
    lounge: ["Lounge Light1", "Lounge Light2", "Lounge Light3", "Lounge Light4"],
    livingRoom: ["Livingroom Light"],
    Kitchen: ["Kitchen Light"],
  }

  roomFanMapping : any = {
    mainBedroom : ["Vent_Blades"]
  }



  allOnLights: string[] = [];
  allOnFans: string[] = [];

  lightGrp: Subject<any> = new Subject();
  fanGrp: Subject<any> = new Subject();
  lightIntensity : Subject<number> = new Subject();

  changeIntensity(factor: number){
    this.lightIntensity.next(factor);
  }

  addToLightOnList(room: string) {
    console.log(this.roomLightMapping[room]);
    
    this.allOnLights = this.allOnLights.concat(this.roomLightMapping[room])
    console.log(this.allOnLights);
    
  }

  removeLightOnList(room: string) {
    this.roomLightMapping[room].forEach((light: any) => {
      this.allOnLights.splice(this.allOnLights.indexOf(light), 1)
    });
  }

  addToFanOnList(room: string) {
    
    this.allOnFans.concat(this.roomFanMapping[room])

  }

  removeFanOnList(room: string) {
    this.roomFanMapping[room].forEach((light: any) => {
      this.allOnFans.splice(this.allOnFans.indexOf(light), 1)
    });
  }


  lightOn(room: string) {
    const tempLightGrp = this.roomLightMapping[room]
    this.lightGrp.next({ list: tempLightGrp, isOn: true });

  }

  lightOff(room: string) {
    const tempLightGrp = this.roomLightMapping[room]
    this.lightGrp.next({ list: tempLightGrp, isOn: false });

  }

  fansOn(room: string) {
    const tempFanGrp = this.roomFanMapping[room]
    this.fanGrp.next({ list: tempFanGrp, isOn: true });

  }

  fansOff(room: string) {
    const tempFanGrp = this.roomFanMapping[room]
    this.fanGrp.next({ list: tempFanGrp, isOn: false });

  }

}
