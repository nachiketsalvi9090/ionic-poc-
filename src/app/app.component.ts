import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { LoginPage } from "../pages/login/login";
import firebase from "firebase";
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    firebase.initializeApp({
      apiKey: "AIzaSyBIpkJ9dTeWyiLrwH30olNiy4NzqesELIo",
      authDomain: "ionic3-mob-star-poc.firebaseapp.com",
      databaseURL: "https://ionic3-mob-star-poc.firebaseio.com",
      projectId: "ionic3-mob-star-poc",
      storageBucket: "ionic3-mob-star-poc.appspot.com",
      messagingSenderId: "470279139427"
    });
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
