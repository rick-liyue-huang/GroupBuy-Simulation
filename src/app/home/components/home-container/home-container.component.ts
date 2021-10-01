import {Component, OnInit, ViewChild} from '@angular/core';
import {ImageSliderComponent} from '../../../shared/components';
import {TopMenu} from '../../../app.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @ViewChild(ImageSliderComponent) imgSlider!: ImageSliderComponent;

  items: TopMenu[] = [
    {
      title: '热门',
      link: 'hot',
      id: 1
    },
    {
      id: 2,
      title: '男装',
      link: 'men'
    },
    {
      id: 3,
      title: '百货',
      link: 'department'
    },
    {
      id: 4,
      title: '运动',
      link: 'sports'
    },
    {
      id: 5,
      title: '手机',
      link: 'mobile'
    },
    {
      id: 6,
      title: '家纺',
      link: 'textile'
    },
    {
      id: 7,
      title: '食品',
      link: 'food'
    },
    {
      id: 8,
      title: '电器',
      link: 'appliance'
    },
    {
      id: 9,
      title: '鞋包',
      link: 'shoes'
    },

  ];

  expression = true;

  handleTabSelect(tabMenu: TopMenu) {
    // console.log(tabMenu);
    this.router.navigate(['home', tabMenu.link])
  }

}
