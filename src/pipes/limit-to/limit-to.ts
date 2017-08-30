import { Pipe, PipeTransform } from '@angular/core';

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
