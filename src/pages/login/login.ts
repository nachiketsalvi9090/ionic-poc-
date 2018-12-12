import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { NgForm } from "@angular/forms";
import { AuthenticationProvider } from "../../providers/authentication/authentication";
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authentication: AuthenticationProvider,
    private loadingComponent: LoadingController
  ) {}

  ionViewDidLoad() {}
  onLogin(form: NgForm) {
    const loading = this.loadingComponent.create({
      content: "Please Wait...",
      spinner: "dots"
    });
    loading.present(
      
    );
    this.authentication
      .signin(form.value.username, form.value.password)
      .then(()=>{
        loading.dismiss();
        this.navCtrl.setRoot(HomePage);
        this.navCtrl.push(HomePage);
      }
      )
      .catch(error => {
        loading.dismiss();
        console.log(error);
      });
  }
}
