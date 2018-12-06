import { Component,ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the EmployeesignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-employeesignup',
  templateUrl: 'employeesignup.html',
})
export class EmployeesignupPage {

  constructor(private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeesignupPage');
  }

  @ViewChild('username') username;
  @ViewChild('password') password;

  alert(message:string) {
     this.alertCtrl.create({
      title: 'info',
      subTitle: message,
      buttons: ['OK']
    }).present();
    
  }
  register() {

  	this.fire.auth.createUserWithEmailAndPassword(this.username.value,this.password.value)
  	.then(data=>{
  		console.log('got data',data);
  		this.alert('hey you are registered');
  	})
  	.catch(error=>{
  		console.log('got error',error);
  		this.alert(error.message);
  	});

  	

  }

}
