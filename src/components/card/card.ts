import { Component } from "@angular/core";

@Component({
  selector: "card",
  template: `
    <div class="card">
      <div class="card-header">
        <img class="user-icon" src="assets/icon/user.png" />
        <div class="header-content">
          <div class="nominated-by">Nominated by: Manager Name</div>
          <div class="award-date">Mob Star - July 31 2018</div>
        </div>
      </div>
      <div class="card-body">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic
      </div>
      <div class="card-like-panel">
        <img class="like-icon" src="assets/icon/like.png" />
        <div class="like-by">ABC and 24 others</div>
        <div class="comments">22 Comments</div>
      </div>
      <div class="card-footer">
        <img class="like-button" src="assets/icon/like-button-icon.png" />
        <ion-item class="comment-box">
          <ion-label><ion-icon name="happy"></ion-icon></ion-label>
          <ion-input type="text" placeholder="Type a message"></ion-input>
        </ion-item>
      </div>
    </div>
  `
})
export class CardComponent {
  text: string;

  constructor() {}
}
