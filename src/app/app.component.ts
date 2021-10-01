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
      imgUrl:
        'https://media.istockphoto.com/photos/morning-jogging-picture-id497687118',
      link: '',
      caption: ''
    },
    {
      imgUrl:
        'https://media.istockphoto.com/photos/listening-the-music-picture-id508949258',
      link: '',
      caption: ''
    },
    {
      imgUrl:
        'https://media.istockphoto.com/photos/pretty-young-teenage-girl-relaxing-on-a-grass-picture-id521982322',
      link: '',
      caption: ''
    },
    {
      imgUrl:
        'https://media.istockphoto.com/photos/beautiful-women-working-out-in-gym-picture-id623680490',
      link: '',
      caption: ''
    },
    {
      imgUrl:
        'https://media.istockphoto.com/photos/jogging-with-my-best-friend-picture-id850045040',
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
