import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmployeeloginPage } from '../employeelogin/employeelogin';
import { EmployeesignupPage } from '../employeesignup/employeesignup';

/**
 * Generated class for the EmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html',
})
export class EmployeePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  myfun3(){
  	this.navCtrl.push(EmployeesignupPage);
  }
  myfun4(){
  	this.navCtrl.push(EmployeeloginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeePage');
  }

}
