import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { DashboardPage } from '../dashboard/dashboard'
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  getData: Observable<any>;
  email:string;
  password:string;
  constructor(public navController: NavController, public navParams: NavParams, public httpClient: HttpClient, private storage: Storage) {
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad LoginPage');
  }
  loggingIn(){
    this.getData = this.httpClient.post('http://34.214.97.185/newweb/public/api/login',{
      email: this.email,
      password:this.password
    });
    this.getData
    .subscribe(data => {
      console.log(data.token);
      this.storage.set('token', data.token);
      this.navController.setRoot(DashboardPage);
    })
  }

}
