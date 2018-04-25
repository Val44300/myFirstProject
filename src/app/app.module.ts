import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StarPage } from '../pages/star/star';
import { ListPage } from '../pages/list/list';
import { NassauPage } from '../pages/nassau/nassau';
import { FormulairePage } from '../pages/formulaire/formulaire';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StarPage,
    ListPage,
    NassauPage,
    FormulairePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StarPage,
    ListPage,
    NassauPage,
    FormulairePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
