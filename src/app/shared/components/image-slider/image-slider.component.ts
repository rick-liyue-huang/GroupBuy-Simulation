import {Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren} from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() intervalBySeconds = 2;
  @ViewChild('imageSlider', {static: true}) imageSliderRef!: ElementRef
  @ViewChildren('img') imgs!: QueryList<ElementRef>
  selectedIndex = 0;

  // memory leak
  intervalId: any;

  constructor(private rd2: Renderer2) { }

  ngOnInit(): void {
    console.log('ngOnInit, ', this.imageSliderRef);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  // safe get the view
  ngAfterViewInit() {
    // console.log('ngOnInt: ', this.imgs)
    // this.imgs.forEach(item => item.nativeElement.style.height = '100px');
    // this.imgs.forEach(item => {
    //   this.rd2.setStyle(item.nativeElement, 'height', '160px');
    // })
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(this.imageSliderRef.nativeElement, 'scrollLeft', (this.getIndex(++this.selectedIndex) * this.imageSliderRef.nativeElement.scrollWidth) / this.sliders.length)
    }, this.intervalBySeconds * 1000);
  }

  getIndex(idx: number): number {
    return idx >= 0 ? idx % this.sliders.length :
      (this.sliders.length - Math.abs(idx)) % this.sliders.length
  }

  handleScroll(ev: any)  {
    const ratio = (ev.target.scrollLeft * this.sliders.length) / ev.target.scrollWidth;
    this.selectedIndex = Math.round(ratio)
  }

}
