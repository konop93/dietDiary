import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';

import {MainScreenPage} from '../../pages/main-screen/main-screen';
import {UserDataProvider} from '../../providers/user-data/user-data';

import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'page-signup',
  templateUrl: 'register.html'
})
export class RegisterPage {
  account: { user_id: number, user_name: string, user_age: number,user_login: string,user_email: string, user_password: string, user_weight: number, user_height: number, user_diet: number, user_url: string } = {
    user_id: Date.now(),
    user_name: '',
    user_age: 0,
    user_login: '',
    user_email: '',
    user_password: '',
    user_weight: 0,
    user_height: 0,
    user_diet: 0,
    user_url: ''
  };

  private signupErrorString: string;
  private signupSuccess: string;

  constructor(public navCtrl: NavController,
              public user: UserDataProvider,
              public toastCtrl: ToastController,
              public translateService: TranslateService) {
  }

  doSignup() {
    this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(MainScreenPage);
    });
  }
}
