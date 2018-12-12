import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MobstarPage } from '../mobstar/mobstar';
import { AwardsPage } from '../awards/awards';
import { NominationsPage } from '../nominations/nominations';
import { HistoryPage } from '../history/history';
import { ProfilePage } from '../profile/profile';
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 tab1Root = MobstarPage;
 tab2Root = AwardsPage;
 tab3Root = NominationsPage;
 tab4Root = HistoryPage;
 tab5Root = ProfilePage;
  ionViewDidLoad() {
  }

}
