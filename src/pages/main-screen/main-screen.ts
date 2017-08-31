import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {NativeStorage} from 'ionic-native';
import {LoginPage} from '../login/login';
import {RegisterPage} from '../register/register';
import {UserDataProvider} from '../../providers/user-data/user-data';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
 */
@Component({
  selector: 'page-welcome',
  templateUrl: 'main-screen.html'
})
export class MainScreenPage {
  account = {
    login: '',
    password: '',
  };

  constructor(public navCtrl: NavController,
              public user: UserDataProvider,) {

  }

  login() {
    NativeStorage.getItem('loginname').then(data => this.account.login = data);
    NativeStorage.getItem('loginpassword').then(data => this.account.password = data);
    if(this.account.login === '' || this.account.password === ''){
      this.navCtrl.push(LoginPage);
    } else {
      this.user.login(this.account);
    }
  }

  signup() {
    this.navCtrl.push(RegisterPage);
  }
}
