import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'days',
})
export class DaysPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    var mydate = new Date(value);
    var nowdate = new Date();

    var diff_time = nowdate.getTime() - mydate.getTime();

    return Math.round(diff_time / (1000 * 3600 * 24));
  }
}
