import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the LimitToPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'limitTo',
})
export class LimitToPipe implements PipeTransform {

  transform(args, val): any {
    const objectArray = [];
    for ( let i = 0; i < val; i++) {
      objectArray[i] = args[i];
    }
    return objectArray ;
  }

}
