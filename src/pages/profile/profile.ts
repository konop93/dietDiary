import {Component} from '@angular/core';
import {UserDataProvider} from '../../providers/user-data/user-data'

import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  userData: any;

  constructor(public navCtrl: NavController,
              private _userDataService: UserDataProvider) {
    this.userData = this._userDataService.getUserData();
  }
}
