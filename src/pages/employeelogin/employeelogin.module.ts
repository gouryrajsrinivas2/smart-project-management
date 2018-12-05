import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeloginPage } from './employeelogin';

@NgModule({
  declarations: [
    EmployeeloginPage,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeloginPage),
  ],
})
export class EmployeeloginPageModule {}
