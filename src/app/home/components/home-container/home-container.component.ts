import {Component, Inject, Injector, OnInit, ViewChild} from '@angular/core';
import {ImageSliderComponent} from '../../../shared/components';
import {TopMenu} from '../../../app.component';
import {Router} from '@angular/router';
import {HomeService, token} from '../../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor(
    private router: Router,
    private service: HomeService,
    @Inject(token) private baseurl: string
  ) { }

  ngOnInit(): void {
    this.items = this.service.getTabs();
    console.log(this.baseurl)
  }

  @ViewChild(ImageSliderComponent) imgSlider!: ImageSliderComponent;

  items: TopMenu[] = [];

  expression = true;

  handleTabSelect(tabMenu: TopMenu) {
    // console.log(tabMenu);
    this.router.navigate(['home', tabMenu.link])
  }

}
