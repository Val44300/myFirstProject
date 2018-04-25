import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NassauPage } from './nassau';

@NgModule({
  declarations: [
    NassauPage,
  ],
  imports: [
    IonicPageModule.forChild(NassauPage),
  ],
})
export class NassauPageModule {}
