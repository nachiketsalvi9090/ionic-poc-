import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-awards',
  templateUrl: 'awards.html',
})
export class AwardsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  headerName='Mob Awards';
  ionViewDidLoad() {
    console.log('ionViewDidLoad AwardsPage');
  }

}
