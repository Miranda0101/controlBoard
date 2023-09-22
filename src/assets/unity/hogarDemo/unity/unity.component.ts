import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InteractService } from 'src/app/interact.service';

declare var createUnityInstance: any;

@Component({
  selector: 'app-unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.css']
})
export class UnityComponent implements AfterViewInit, OnDestroy, OnInit, OnDestroy {
  gameInstance: any;

  container!: HTMLElement
  canvas!: HTMLElement
  loadingBar!: HTMLElement
  progressBarFull!: HTMLElement
  fullscreenButton!: HTMLElement
  warningBanner!: HTMLElement

  buildUrl: any;
  loaderUrl: any;
  config: any;

  subscriptions: Subscription[] = [];

  constructor(private interactService: InteractService) { }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let self = this;
    this.subscriptions.push(this.interactService.lightGrp.subscribe(
      {
        next(newValue: any) {
          console.log("newList")
          if (newValue.isOn) {
            newValue.list.forEach((light: any) => {
              self.gameInstance.SendMessage(light, 'lightOn')
            });
          } else {
            newValue.list.forEach((light: any) => {
              self.gameInstance.SendMessage(light, 'lightOff')
            });
          }
        }
      }

    ))

    this.subscriptions.push(this.interactService.fanGrp.subscribe(
      {
        next(newValue: any) {
          console.log("newList")
          if (newValue.isOn) {
            newValue.list.forEach((fan: any) => {
              self.gameInstance.SendMessage(fan, 'fanOn')
            });
          } else {
            newValue.list.forEach((fan: any) => {
              self.gameInstance.SendMessage(fan, 'fanOff')
            });
          }
        }
      }
    ))

    this.subscriptions.push(this.interactService.lightIntensity.subscribe(
      {
        next(factor){
          console.log(factor);

          for(let room in self.interactService.roomLightMapping){

            self.interactService.roomLightMapping[room].forEach((light:any) => {
              self.gameInstance.SendMessage(light, 'changeIntensity', factor)
            })
          }
          
         
          
        }
      }
      ))

  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.

  }

  ngAfterViewInit(): void {
    this.container = document.querySelector("#unity-container")!;
    this.canvas = document.querySelector("#unity-canvas")!;
    this.loadingBar = document.querySelector("#unity-loading-bar")!;
    this.progressBarFull = document.querySelector("#unity-progress-bar-full")!;
    this.fullscreenButton = document.querySelector("#unity-fullscreen-button")!;
    this.warningBanner = document.querySelector("#unity-warning")!;

    this.buildUrl = "assets/unity/hogarDemo/Build";
    this.loaderUrl = this.buildUrl + "/hogarDemo.loader.js";
    this.config = {
      dataUrl: this.buildUrl + "/hogarDemo.data",
      frameworkUrl: this.buildUrl + "/hogarDemo.framework.js",
      codeUrl: this.buildUrl + "/hogarDemo.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "My project (2)",
      productVersion: "0.1.0",
      // showBanner: this.unityShowBanner,
    };

    this.createInstance();

  }




  // Shows a temporary message banner/ribbon for a few seconds, or
  // a permanent error message on top of the canvas if type=='error'.
  // If type=='warning', a yellow highlight color is used.
  // Modify or remove this function to customize the visually presented
  // way that non-critical warnings and error messages are presented to the
  // user.
  updateBannerVisibility() {
    this.warningBanner.style.display = this.warningBanner.children.length ? 'block' : 'none';
  }

  unityShowBanner(msg: any, type: any) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    this.warningBanner.appendChild(div);
    if (type == 'error') {
      div.style.background = 'red;';
      div.style.padding = '10px';
    }
    else {
      if (type == 'warning') {
        div.style.background = 'yellow';
        div.style.padding = '10px';
      }
      setTimeout(() => {
        this.warningBanner.removeChild(div);
        this.updateBannerVisibility();
      }, 5000);
    }
    this.updateBannerVisibility();
  }

  createInstance() {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      // Mobile device style: fill the whole browser client area with the game canvas:

      var meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
      document.getElementsByTagName('head')[0].appendChild(meta);
      this.container.className = "unity-mobile";
      this.canvas.className = "unity-mobile";

      // To lower canvas resolution on mobile devices to gain some
      // performance, uncomment the following line:
      // config.devicePixelRatio = 1;


    } else {
      // Desktop style: Render the game canvas in a window that can be maximized to fullscreen:

      this.canvas.style.width = "960px";
      this.canvas.style.height = "600px";
    }

    this.loadingBar.style.display = "block";

    // var script = document.createElement("script");
    // script.src = this.loaderUrl;
    // script.onload = () => {
    createUnityInstance(this.canvas, this.config, (progress: any) => {
      this.progressBarFull.style.width = 100 * progress + "%";
    }).then((unityInstance: any) => {
      this.gameInstance = unityInstance;
      this.loadingBar.style.display = "none";
      this.fullscreenButton.onclick = () => {
        unityInstance.SetFullscreen(1);
      };
    }).catch((message: any) => {
      alert(message);
    });
    // };

    // document.body.appendChild(script);
  }





  ngOnDestroy() {
    if (this.gameInstance) {
      // Cleanup Unity Instance when component is destroyed
      this.gameInstance.Quit(() => { });
    }

    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}




