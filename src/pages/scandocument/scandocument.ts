import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-scandocument',
  templateUrl: 'scandocument.html',
})
export class ScandocumentPage {
  myPhoto : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera) {
    
  }
ionViewWillEnter(){
  
}
takePhoto(){
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  this.camera.getPicture(options).then((imageData) => {
  
    // If it's base64 (DATA_URL):
    this.myPhoto = 'data:image/jpeg;base64,' + imageData;
   }, (err) => {
   });
}
}
