import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { DashboardPage } from '../dashboard/dashboard'
import { Storage } from '@ionic/storage';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  getData: Observable<any>;
  username:string;
  email:string;
  password:string;
  c_password:string;

  constructor(public navController: NavController, public navParams: NavParams, public httpClient: HttpClient, private storage: Storage) {
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad RegisterPage');
  }
  signinUp(){
    this.getData = this.httpClient.post('http://34.214.97.185/newweb/public/api/register',{
      name:this.username,
      email: this.email,
      password:this.password,
      c_password:this.c_password
    });
    this.getData
    .subscribe(data => {
      this.storage.set('token', data.token);
      this.navController.setRoot(DashboardPage);
    })
  }

}
