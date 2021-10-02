import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ago'
})
export class AgoPipe implements PipeTransform {
  transform(value: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) {
        // 小于 30 秒
        return '刚刚';
      }
      const intervals = {
        year: 3600 * 24 * 365,
        month: 3600 * 24 * 30,
        week: 3600 * 24 * 7,
        day: 3600 * 24,
        hour: 3600,
        minute: 60,
        second: 1
      };
      let counter = 0;
      for (const unitName in intervals) {
        if (intervals.hasOwnProperty(unitName)) {
          // @ts-ignore
          const unitValue = intervals[unitName];
          counter = Math.floor(seconds / unitValue);
          if (counter > 0) {
            return counter + ' ' + unitName + ' ago';
          }
        }
      }
    }
    return value;
  }
}


