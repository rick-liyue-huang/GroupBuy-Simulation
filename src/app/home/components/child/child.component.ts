import {ChangeDetectionStrategy, Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  _title!: string;
  _time!: number;
  @ViewChild('timeRef', {static: true}) timeRef!: ElementRef;

  constructor(private ngZone: NgZone, private rd2: Renderer2) {
    this._title = 'hi';
  }

  ngOnInit(): void {
  }

  public get title(): string {
    console.log('dirty value detection: ')
    return this._title;
  //  checkAndUpdateView() used to dirty value detection in @angular/core
  }

  public get time(): number {
    return this._time;
  }

  // 通过 ngZone 可以将脏值检查脱离开angular的范围，只是处理类似于倒计时的操作
  ngAfterViewChecked() {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this._title = 'heihie'
        this._time = Date.now();
        // this.timeRef.nativeElement.innerText = Date.now();
        // angular best practices
        // this.rd2.setProperty(this.timeRef.nativeElement, 'innerText', formatDate(Date.now(), 'ss:mm:HH', 'zh-Hans'))
      }, 1000);
    })
  }

  handleClick() {

  }

}
