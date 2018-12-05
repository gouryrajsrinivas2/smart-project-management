import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EmployeePage } from '../pages/employee/employee';
import { ManagerPage } from '../pages/manager/manager';
import { EmployeeloginPage } from '../pages/employeelogin/employeelogin';
import { EmployeesignupPage } from '../pages/employeesignup/employeesignup';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { ManagerdataPage } from '../pages/managerdata/managerdata';
import { ProjdataPage } from '../pages/projdata/projdata';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
//import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { AngularFireDatabaseModule } from '@angular/fire/database';

const firebaseAuth={
    apiKey: "AIzaSyCLS6qXKnntGAz7NEumjqR_3uVtNrLOtmI",
    authDomain: "loginapp-6bfab.firebaseapp.com",
    databaseURL: "https://loginapp-6bfab.firebaseio.com",
    projectId: "loginapp-6bfab",
    storageBucket: "loginapp-6bfab.appspot.com",
    messagingSenderId: "374175916674"
  };


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EmployeePage,
    ManagerPage,
    EmployeeloginPage,
    EmployeesignupPage,
    LoggedinPage,
    ManagerdataPage,
    ProjdataPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EmployeePage,
    ManagerPage,
    EmployeeloginPage,
    EmployeesignupPage,
    LoggedinPage,
    ManagerdataPage,
    ProjdataPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    //FirebaseServiceProvider

  ]
})
export class AppModule {}
