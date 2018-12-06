import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ManagerdataPage } from '../managerdata/managerdata';
/**
 * Generated class for the ManagerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-manager',
  templateUrl: 'manager.html',
})
export class ManagerPage {

  constructor(private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerPage');
  }
  
  @ViewChild('username') username;
  @ViewChild('password') password;
  signup() {

  	this.fire.auth.signInWithEmailAndPassword(this.username.value,this.password.value)
  	.then(
  		
  		data=>{console.log('loged in',this.fire.auth.currentUser);
  		//this.alert('hey you are logged in');
  		this.navCtrl.setRoot(ManagerdataPage);
  	})
  	.catch(error=>{
  		console.log("error",error);
  		this.alert(error.message);
  	
  	});
  	

  }
  alert(message:string) {
     this.alertCtrl.create({
      title: 'info',
      subTitle: message,
      buttons: ['OK']
    }).present();
    
  }



}
