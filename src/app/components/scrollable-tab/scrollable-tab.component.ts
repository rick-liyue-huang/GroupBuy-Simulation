import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TopMenu} from '../../app.component';

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {

  @Input() items!: TopMenu[];
  @Input() backgroundColor: string = '';
  @Input() titleActiveColor: string = '';
  @Input() titleDefaultColor: string = '';
  @Input() indicatorColor = '';
  @Output() tabSelected = new EventEmitter();

  selectedIndex = -1;

  constructor() { }

  ngOnInit(): void {
  }

  handleSelect(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.items[this.selectedIndex]);
  }

}
