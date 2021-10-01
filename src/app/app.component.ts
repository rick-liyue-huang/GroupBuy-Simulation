import {Component, ViewChild} from '@angular/core';
import {ImageSlider, ImageSliderComponent} from './shared/components';


export interface TopMenu {
  title: string;
  link?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(ImageSliderComponent) imgSlider!: ImageSliderComponent;

  items: TopMenu[] = [
    {title: 'Hot', link: ''}, {title: 'Clothes', link: ''}, {title: 'Mobile', link: ''}, {title: 'Computer', link: ''}
  ];

  imageSliders: ImageSlider[] = [
    {
      imgUrl: 'https://media.istockphoto.com/photos/family-and-friends-happy-moments-in-video-conference-picture-id1217123314?k=20&m=1217123314&s=612x612&w=0&h=BGBa6kz6CDnWyK3eBRVhAIEEWSHOQtxxN-xqxEXVAdg='
      , link: '',
      caption: ''
    },
    {
      imgUrl: 'https://media.istockphoto.com/photos/two-swimmers-in-a-pool-joining-hands-picture-id77930894',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://media.istockphoto.com/photos/family-and-friends-happy-moments-in-video-conference-picture-id1217123314?k=20&m=1217123314&s=612x612&w=0&h=BGBa6kz6CDnWyK3eBRVhAIEEWSHOQtxxN-xqxEXVAdg='
      , link: '',
      caption: ''
    },
    {
      imgUrl: 'https://media.istockphoto.com/photos/two-swimmers-in-a-pool-joining-hands-picture-id77930894',
      link: '',
      caption: ''
    }
  ];

  expression = true;

  handleTabSelect(tabMenu: TopMenu) {
    console.log(tabMenu);
  }


  ngAfterViewInit() {
    console.log(this.imageSliders);
  }
}
