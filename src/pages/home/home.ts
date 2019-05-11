import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login'
import { RegisterPage } from '../register/register'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navController: NavController) {

  }

  toLogin(){
    this.navController.setRoot(LoginPage);
  }

  toRegister(){
    this.navController.setRoot(RegisterPage);
  }

}
