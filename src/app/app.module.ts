import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ItsubmissionPage } from "../pages/itsubmission/itsubmission";
import { TabsPage } from "../pages/tabs/tabs";
import { ScandocumentPage } from "../pages/scandocument/scandocument";
import { UploaddocumentPage } from "../pages/uploaddocument/uploaddocument";
import { Camera } from "@ionic-native/camera";
import { NominationsPage } from "../pages/nominations/nominations";
import { HistoryPage } from "../pages/history/history";
import { ProfilePage } from "../pages/profile/profile";
import { MobstarPage } from "../pages/mobstar/mobstar";
import { AwardsPage } from "../pages/awards/awards";
import { HeaderComponent } from "../components/header/header";
import { CardComponent } from "../components/card/card";
import { LoginPage } from "../pages/login/login";
import { AuthenticationProvider } from '../providers/authentication/authentication';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItsubmissionPage,
    TabsPage,
    ScandocumentPage,
    UploaddocumentPage,
    TabsPage,
    NominationsPage,
    HistoryPage,
    ProfilePage,
    MobstarPage,
    AwardsPage,
    HeaderComponent,
    CardComponent,
    LoginPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItsubmissionPage,
    TabsPage,
    ScandocumentPage,
    UploaddocumentPage,
    TabsPage,
    NominationsPage,
    HistoryPage,
    ProfilePage,
    MobstarPage,
    AwardsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthenticationProvider
  ]
})
export class AppModule {}
