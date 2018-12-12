import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-uploaddocument',
  templateUrl: 'uploaddocument.html',
})
export class UploaddocumentPage {
document = 0;
flagForDocument = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

get noDocumentFound(){
  if(this.document == 0){
this.flagForDocument = true;
  }
  return this.flagForDocument;
}

}
