import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Api} from '../api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserDataProvider {
  _user: any;
  url: string = 'https://example.com/api/v1';
  userData = {
    name: 'Agnieszka',
    age: 21,
    weight: 45,
    height: 170,
    caloriesPerDay: 2000,
    caloriesToday: 0,
    burntCalories: 0,
    exercises: 0,
    dietChosen: 'firstDiet'
  };

  constructor(public http: Http, public api: Api) {
  }

  getUserData() {
    return this.userData;
  }

  saveData(type, calories) {
    this.userData[type] += calories
  }

  saveDiet(diet) {
    this.userData.dietChosen = diet;
  }

  login(accountInfo: any) {
    let seq = this.api.post('login', accountInfo).share();

    seq
      .map(res => res.json())
      .subscribe(res => {
        if (res.status == 'success') {
          this._loggedIn(res);
        } else {
        }
      }, err => {
        console.error('ERROR', err);
      });

    return seq;
  }

  signup(accountInfo: any) {
    let seq = this.api.post('signup', accountInfo).share();

    seq
      .map(res => res.json())
      .subscribe(res => {
        if (res.status == 'success') {
          this._loggedIn(res);
        }
      }, err => {
        console.error('ERROR', err);
      });

    return seq;
  }

  logout() {
    this._user = null;
  }

  _loggedIn(resp) {
    this._user = resp.user;
  }
}
