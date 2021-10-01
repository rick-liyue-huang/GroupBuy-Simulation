import {Component, ViewChild} from '@angular/core';
import {Channel, ImageSlider, ImageSliderComponent} from './shared/components';


export interface TopMenu {
  id: number;
  title: string;
  link?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


}
