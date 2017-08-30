import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { DIET } from '../../models/diet.mock'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class UserDataProvider {
  _user: any;
  user: any;
  diets = DIET;
  userData = {
    caloriesPerDay: 0,
    caloriesToday: 0,
    burntCalories: 0,
    exercises: 0,
  };

  constructor(public http: Http) {
  }

  getUserData() {
    return this.user;
  }

  saveData(type, calories) {
    if(type === 'exercises'){
      this.user.caloriesPerDay = this.user.caloriesPerDay + calories;
    } else {
      this.user.caloriesPerDay = this.user.caloriesPerDay - calories
    }
    this.user[type] += calories
  }

  saveDiet(diet) {
    this.user[0].user_diet = diet.id;
    this.user.caloriesPerDay = diet.calories;
  }

  getDiet() {
    return this.user[0].user_diet;
  }

  login(accountInfo: any) {
    let login = this.http.get(`http://kartwal.ayz.pl:3000/user/${accountInfo.login}/${accountInfo.password}`);
    login
      .map(res => res.json())
      .subscribe(res => {
        this._user = res;
        this.user = Object.assign(this._user, this.userData);
        if (this.user[0].user_url === '') {
          this.user[0].user_url = 'assets/img/userPlaceholder.png'
        }
        console.log(this.user);
      });
    return login;
  }

  signup(accountInfo: any) {
      let seq = this.http.get(`http://kartwal.ayz.pl:3000/user/post/${accountInfo.user_id}/${accountInfo.user_name}/${accountInfo.user_age}/${accountInfo.user_login}/${accountInfo.user_password}/${accountInfo.user_email}/${accountInfo.user_weight}/${accountInfo.user_height}/${accountInfo.user_diet}/${accountInfo.user_url}/`, accountInfo);
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

  update(accountInfo: any) {
    let changedData = {
      "user_name": accountInfo.user_name,
      "user_login": accountInfo.user_login,
      "user_password": accountInfo.user_password,
      "user_email": accountInfo.user_email,
      "user_weight": accountInfo.user_weight,
      "user_height": accountInfo.user_height,
      "user_url": accountInfo.user_url
    };
    this.http.put(`http://kartwal.ayz.pl:3000/user/${accountInfo.user_id}`, changedData);
  }

  logout() {
    this._user = null;
  }

  _loggedIn(resp) {
    this._user = resp.user;
  }
}
