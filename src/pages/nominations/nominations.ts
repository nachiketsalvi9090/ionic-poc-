import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-nominations',
  templateUrl: 'nominations.html',
})
export class NominationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  headerName='Nominations';
  ionViewDidLoad() {
  }

}
