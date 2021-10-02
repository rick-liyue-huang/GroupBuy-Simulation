import {Component, Input, OnInit} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {map, takeWhile, tap} from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {

  countDown$!: Observable<string>;

  @Input() startDate = new Date();
  @Input() futureDate!: Date;
  private MS_PER_SECOND = 1000;

  constructor() { }

  ngOnInit(): void {
    this.countDown$ = this.getCountDownObservable(this.startDate, this.futureDate);
  }

  private diffInSecond = (start: Date, future: Date): number => {
    const diff = future.getTime() - start.getTime();
    return Math.floor(diff /  this.MS_PER_SECOND);
  }

  private getCountDownObservable(startDate: Date, futureDate: Date) {
    return interval(1000).pipe(
      map(elapse => this.diffInSecond(startDate, futureDate) - elapse ),
      takeWhile(gap => gap >= 0),
      tap(val => console.log(val)),
      map(sec  => ({
        day: Math.floor(sec / 3600 / 24),
        hour: Math.floor((sec / 3600) % 24),
        minute: Math.floor((sec / 60) % 60),
        second: Math.floor(sec % 60)
      })),
      map(({hour, minute, second}) => `${hour}: ${minute}: ${second}`)
    )
  }

}
