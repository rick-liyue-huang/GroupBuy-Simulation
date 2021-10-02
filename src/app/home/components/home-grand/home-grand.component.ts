import {Component, Injectable, Injector, OnInit} from '@angular/core';


@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {

  obj = {name: 'rixk', mobile: 'x'};
  date!: Date;
  price  = 123.666;
  data = [2, 5, 7, 8, 9];

  minusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }


  constructor() { }

  ngOnInit(): void {
    this.date = this.minusDays(new Date(), 2);
  }

}
