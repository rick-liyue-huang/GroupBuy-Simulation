import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Channel, ImageSlider} from '../../../shared/components';
import {ActivatedRoute} from '@angular/router';
import {HomeService} from '../../../services';
import {filter, map} from 'rxjs/operators';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit, OnDestroy {

  channels: Channel[] =[];
  imageSliders: ImageSlider[] =[];
  imageSliders$!: Observable<ImageSlider[]>

  selectedTabLink: string | null = '';
  selectedTabLink$!: Observable<string | null>
  sub!: Subscription;


  constructor(
    private route: ActivatedRoute,
    private service: HomeService,
    private cd: ChangeDetectorRef
  ) { }


  ngOnInit(): void {
    /*this.route.paramMap
      .pipe(
        filter(params => params.has('tabLink')),
        map(params => params.get('tabLink'))
      )
      .subscribe(tabLink => {
        console.log('url path params: ', tabLink)
      // this.selectedTabLink = params.get('tabLink');
        this.selectedTabLink = tabLink;
      // if the detail component is onPush detection, it needs the manual change
        this.cd.markForCheck();
    });*/
    this.selectedTabLink$ = this.route.paramMap
      .pipe(
        filter(params => params.has('tabLink')),
        map(params => params.get('tabLink'))
      );
    this.sub = this.route.queryParamMap.subscribe(params => {
      console.log("query path params: ",params)
    });
    this.service.getChannels().subscribe(channels => {
      this.channels = channels
      this.cd.markForCheck();
    })
    this.service.getBanners().subscribe(banners => {
      this.imageSliders = banners;
      this.cd.markForCheck();
    })
    // this.imageSliders$ = this.service.getBanners()
  }
  // avoid memory leakage
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
