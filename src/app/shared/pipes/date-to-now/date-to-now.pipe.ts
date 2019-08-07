import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment/moment';

@Pipe({
  name: 'dateToNow'
})
export class DateToNowPipe implements PipeTransform {

  transform(date: Date, ...args: any[]): any {
    return moment(date).toNow(true).replace('years', 'anos');
  }

}
