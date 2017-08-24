import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ExercisesProvider {
  constructor(public http: Http) {
  }

  public getExercises(): Observable<Response> {

    const url: string = encodeURI('https://wger.de/api/v2/exercise/');

    return this.http.get(url)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json());
  };
}
