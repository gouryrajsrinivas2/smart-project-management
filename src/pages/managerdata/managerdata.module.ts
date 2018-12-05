import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagerdataPage } from './managerdata';

@NgModule({
  declarations: [
    ManagerdataPage,
  ],
  imports: [
    IonicPageModule.forChild(ManagerdataPage),
  ],
})
export class ManagerdataPageModule {}
