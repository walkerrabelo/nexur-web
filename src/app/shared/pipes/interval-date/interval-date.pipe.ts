import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment/moment';

@Pipe({
  name: 'intervalDate'
})
export class IntervalDatePipe implements PipeTransform {

  transform(date1: Date, date2: Date): any {
    moment.locale('pt-BR');
    if (date1 && date2) {
      return moment(date1).format('L') + ' a ' + moment(date2).format('L');
    }
    return '';
  }

}
