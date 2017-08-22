import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserDataProvider {
  userData = {
    name: 'Agnieszka',
    age: 21,
    weight: 45,
    actualBMI:8,
    caloriesPerDay: 2000,
    caloriesToday: 500,
    burntCalories: 300,
    exercises:100,
    dietChosen: 'firstDiet'
  };

  constructor(public http: Http) {
  }

  getUserData(){
    return this.userData;
  }
}
