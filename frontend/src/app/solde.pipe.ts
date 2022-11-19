import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'solde',
})
export class SoldePipe implements PipeTransform {
  transform(value: any, origprix: any): any {
    return ((100 * (origprix - value)) / origprix).toFixed(0);
  }
}
