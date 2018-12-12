import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UploaddocumentPage } from '../uploaddocument/uploaddocument';
import { ScandocumentPage } from '../scandocument/scandocument';
@IonicPage()
@Component({
  selector: 'page-itsubmission',
  templateUrl: 'itsubmission.html',
})
export class ItsubmissionPage {
  Scan = "../../assets/icon/scan.png";
  uploaddocument = UploaddocumentPage;
  scandocument = ScandocumentPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  navigateToHome(){
    this.navCtrl.popToRoot();
  }
}
