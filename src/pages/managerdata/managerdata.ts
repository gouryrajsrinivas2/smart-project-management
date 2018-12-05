import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { HomePage } from '../home/home';

/**
 * Generated class for the ManagerdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-managerdata',
  templateUrl: 'managerdata.html'

})
export class ManagerdataPage {

	arrData=[]
	newitem

  constructor(public alertCtrl: AlertController,public afd : AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  	this.afd.list("/projectdata/").valueChanges.apply(_data=>{
  		this.arrData=_data;
  		console.log(this);

  	})

  	
  }
  addproject()
  {
  	this.afd.list('/projectdata').push(this.newitem)
  	this.alert('details about project is succesfully added');
  }
 alert(message:string) {
     this.alertCtrl.create({
      title: 'info',
      subTitle: message,
      buttons: ['OK']
    }).present();
 }
 goback(){
 	this.navCtrl.setRoot(HomePage);
 }
  /*getprojectdata(){
  	return this.afd.list(projectdata);
  }
  addprojectdata(name){
  	this.afd.list('/projectdata/').push(name)
  }*/
  /*ionViewDidLoad(){
    console.log('ionViewDidLoad ManagerdataPage');
  }*/

}
