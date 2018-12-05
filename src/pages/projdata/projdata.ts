import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireList,AngularFireDatabase} from '@angular/fire/database';
import firebase from 'firebase';
import { HomePage } from '../home/home';
/**
 * Generated class for the ProjdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projdata',
  templateUrl: 'projdata.html',
})
export class ProjdataPage {

	arrDatas=[] as any;
	spinit:boolean;
	//newitem
  constructor(public navCtrl: NavController, public navParams: NavParams,public afd : AngularFireDatabase) {
  	/*this.afd.list("/projectdata/").valueChanges.apply(_data=>{
  		this.arrData=_data;
  		//console.log("srinivas");
  		console.log(this);
  	})*/
  	/*this.afd.list("/projectdata/").valueChanges.apply(_data=>{
  		this.arrData=_data;
  		console.log(this);*/
  		this.spinit=false;
  		firebase.database().ref('/projectdata/')
  		.once('value',snapshot=>{
  			this.arrDatas=[];
  			snapshot.forEach(snap=>{
  				this.arrDatas.push({key:snap.key,value:snap.val()});
  			})
  			this.spinit=true;
  		})

  		
  }
   goback(){
 	this.navCtrl.setRoot(HomePage);
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjdataPage');
  }

}
