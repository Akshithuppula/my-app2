import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'years'
})
export class YearsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value+" years";
  }

}
