import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListcircuitPage } from '../pages/listcircuit/listcircuit';
import { FilterPage } from '../pages/filter/filter'; 
import { DetailcircuitPage } from '../pages/detailcircuit/detailcircuit';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListcircuitPage,
    FilterPage,
    DetailcircuitPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListcircuitPage,
    FilterPage,
    DetailcircuitPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
