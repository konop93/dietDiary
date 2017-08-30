import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {Http, Headers} from '@angular/http';

import {MainPage} from '../../pages/pages';

import {UserDataProvider} from '../../providers/user-data/user-data';

import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  account: { login: string, password: string } = {
    login: '',
    password: ''
  };
  userData: any;
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
              public user: UserDataProvider,
              public toastCtrl: ToastController,
              public http: Http,
              public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  doLogin() {
    this.user.login(this.account)
      .subscribe(res => {
        if (res.status === 200) {
          this.navCtrl.push(MainPage);
        } else {
          let toast = this.toastCtrl.create({
            message: this.loginErrorString,
            duration: 3000,
            position: 'top'
          });
          toast.present();
        }
      });
  }

  getUserData(){
    return this.userData;
  }


}
