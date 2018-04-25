import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicPageModule } from 'ionic-angular';
import { FormulairePage } from './formulaire';

//import { AppComponent } from '../app.component';

@NgModule({
  declarations: [
    FormulairePage,
    //AppComponent
  ],
  imports: [
    IonicPageModule.forChild(FormulairePage),
    BrowserModule,
    FormsModule
  ],
  providers: []
  //bootstrap: [AppComponent]
})
export class FormPageModule {}
