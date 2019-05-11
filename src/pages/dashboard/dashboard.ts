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
  getData:Observable<any>;
  clickDetails=false;
  constructor(public navController: NavController, public navParams: NavParams, public httpClient: HttpClient, private storage:Storage) {
  }

  ionViewDidLoad() {
    
    this.storage.get('token').then((val) => {
      this.getUserDetails(val);

    });

    
  }

  
  getUserDetails(auth_token){
    
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer '+ auth_token,
    })

    this.getData = this.httpClient.get('http://34.214.97.185/newweb/public/api/details',{headers});
    this.getData
    .subscribe(data => {

      this.username = data.user.name;
      this.email = data.user.email;
    })

    this.clickDetails = true;
  }

  loggingOut(){
    this.storage.set('token', '');
    this.navController.setRoot(HomePage);
  }

 

}
