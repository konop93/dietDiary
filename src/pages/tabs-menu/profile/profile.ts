import {Component} from '@angular/core';
import {UserDataProvider} from '../../../providers/user-data/user-data'
import {Stepcounter} from '@ionic-native/stepcounter';
import { NativeStorage } from 'ionic-native';

import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: './profile.html'
})
export class ProfilePage {
  userData: any;
  actualBMI: number;
  startedStep = 0;
  getStep;
  started;
  msg;
  name: string;
  password: string;
  constructor(public navCtrl: NavController,
              private _userDataService: UserDataProvider,
              private _stepCounter: Stepcounter) {
    this.userData = this._userDataService.getUserData();
    this.actualBMI = Math.round(this.userData[0].user_weight / ((this.userData[0].user_height / 100) * (this.userData[0].user_height / 100)));
    if(this.userData[0].user_diet === 0){
      this.userData.caloriesPerDay = "Choose diet"
    }

  }

  startStepCounter() {
    this._stepCounter.start(this.startedStep)
      .then(onSuccess => this.started = onSuccess,
        onFailure => this.started = onFailure);
    this._stepCounter.deviceCanCountSteps().then(success => {
      if(success == false) {
        this.msg = "Twój telefon nie wspiera tej usługi...";
      } else {
        this._stepCounter.getStepCount().then( steps =>
        {
          this.getStep = steps;
        })
      }
    })
  }
}
