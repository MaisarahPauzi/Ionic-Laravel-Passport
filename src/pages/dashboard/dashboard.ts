import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  username:string;
  email:string;
  token:string;
  getData:Observable<any>;
  clickDetails=false;
  constructor(public navController: NavController, public navParams: NavParams, public httpClient: HttpClient, private storage:Storage) {
  }

  ionViewDidLoad() {
    this.storage.get('token').then((val) => {
      this.token=val;
      console.log('Your token:', this.token)
    });

    
  }
  getUserDetails(){
    this.clickDetails = true;
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer '+this.token,
    })

    this.getData = this.httpClient.get('http://34.214.97.185/newweb/public/api/details',{headers});
    this.getData
    .subscribe(data => {
      console.log(data);
      this.username = data.user.name;
      this.email = data.user.email;
    })
  }

  loggingOut(){
    this.storage.set('token', '');
    this.navController.setRoot(HomePage);
  }

 

}
