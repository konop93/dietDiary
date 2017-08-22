import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DishesProvider {
  dishes;
  constructor(public http: Http) {
  }

  public getDishes(): Observable<Response> {

    const url: string = encodeURI('https://thereportoftheweek-api.herokuapp.com/reports');

    return this.http.get(url)
      .map( res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json());
  };
}
