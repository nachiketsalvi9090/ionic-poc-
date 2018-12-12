import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-mobstar',
  templateUrl: 'mobstar.html',
})
export class MobstarPage {
  headerName ='Mob Star'
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let data  = {
      
        userId: 'a@gmail.com',
        Mobster: [
          {
            By: 'a@test.com',
            Date: '12/11/2034',
            Description: "Lorem Ipsum is simply dummy text of the printing and typesetting"+
            +"industry. Lorem Ipsum has been the industry's standard dummy text ever"+
            +"since the 1500s, when an unknown printer took a galley of type and"+
            +"scrambled it to make a type specimen book. It has survived not only five"+
            +"centuries, but also the leap into electronic",
            Like: '22',
            Comment: '234'
          }
        ],
        Awards: [
          {
            By: 'test@award.com',
            Date: '12/12/2344',
            Description: "Lorem Ipsum is simply dummy text of the printing and typesetting"+
            +"industry. Lorem Ipsum has been the industry's standard dummy text ever"+
            +"since the 1500s, when an unknown printer took a galley of type and"+
            +"scrambled it to make a type specimen book. It has survived not only five"+
            +"centuries, but also the leap into electronic",
            Like: '12343',
            Comment: '12321324'
          }
        ],
        Nominations: [
          {
            to: 'test@nomination.com',
            Date: '12/01/21Description: "Lorem Ipsum is simply dummy text of the printing and typesetting"+
            +"industry. Lorem Ipsum has been the industry's standard dummy text ever"+
            +"since the 1500s, when an unknown printer took a galley of type and"+
            +"scrambled it to make a type specimen book. It has survived not only five"+
            +"centuries, but also the leap into electronic"
          }
        ],
        History: [],
        Name: 'Test Profile',
        profile_url: 'https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_1280.png',
        Designation: 'Test Designation',
        DOB: '21/12/8988',
    }
     ;
  }

}
