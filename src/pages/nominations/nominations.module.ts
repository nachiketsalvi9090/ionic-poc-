import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NominationsPage } from './nominations';

@NgModule({
  declarations: [
    NominationsPage,
  ],
  imports: [
    IonicPageModule.forChild(NominationsPage),
  ],
})
export class NominationsPageModule {}
