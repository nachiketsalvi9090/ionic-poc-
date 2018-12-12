import { Component, Input } from "@angular/core";

@Component({
  selector: "header",
  template: `
  <ion-header>
  <ion-navbar>
    <ion-title class="title">{{headerName}}</ion-title>
    <ion-buttons end>
      <button ion-button icon-only class="search">
        <img class="search-icon" src="assets/icon/search.png" />
      </button>
      <button class="home" ion-button icon-only color="dark">
        <img class="home-icon " src="assets/icon/home.png" />
      </button>
    </ion-buttons>
  </ion-navbar>
</ion-header>
<ion-content></ion-content>
  `
})
export class HeaderComponent {
  text: string;
@Input() headerName: string;
  constructor() {}
}
