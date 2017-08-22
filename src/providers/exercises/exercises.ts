import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ExercisesProvider {
  url = "";
  constructor(public http: Http) {
  }

  getExercises(): Observable<any>{
    return this.http.get(this.url)
  }
}
