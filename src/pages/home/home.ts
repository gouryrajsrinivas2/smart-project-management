import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmployeePage } from '../employee/employee';
import { ManagerPage } from '../manager/manager';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  myfun(){
  	this.navCtrl.push(EmployeePage);
  }
  myfun2(){
  	this.navCtrl.push(ManagerPage);
  }

}
