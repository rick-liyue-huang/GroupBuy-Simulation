import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Channel, ImageSlider} from '../../../shared/components';
import {ActivatedRoute} from '@angular/router';
import {HomeService} from '../../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {

  channels: Channel[] =[];
  imageSliders: ImageSlider[] =[];

  selectedTabLink: string | null = '';


  constructor(
    private route: ActivatedRoute,
    private service: HomeService,
    private cd: ChangeDetectorRef
  ) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log('url path params: ', params)
      this.selectedTabLink = params.get('tabLink');
      // if the detail component is onPush detection, it needs the manual change
      this.cd.markForCheck();
    });
    this.route.queryParamMap.subscribe(params => {
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
  }

}
