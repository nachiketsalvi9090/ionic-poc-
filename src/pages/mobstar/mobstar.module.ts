import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MobstarPage } from './mobstar';

@NgModule({
  declarations: [
    MobstarPage,
  ],
  imports: [
    IonicPageModule.forChild(MobstarPage),
  ],
})
export class MobstarPageModule {}
