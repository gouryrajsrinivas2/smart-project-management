import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFireList,AngularFireDatabase} from '@angular/fire/database';
import { ProjdataPage } from '../projdata/projdata';
/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {

  //arrData=[]
  //newitem
 // email:string;
  constructor(public afd : AngularFireDatabase,private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
  }
  getdata(){
  	this.navCtrl.setRoot(ProjdataPage);
  }

}
