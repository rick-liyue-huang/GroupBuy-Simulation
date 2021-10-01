import { Component, OnInit } from '@angular/core';
import {Confirmable, Emoji} from '../../decorators/decorators';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {

  username = '';

  @Emoji() result = 'Hello'
  @Confirmable('are you sure') handleClick() {
    console.log('confirm');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
