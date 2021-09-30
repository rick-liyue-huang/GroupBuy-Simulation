import { Component } from '@angular/core';


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

  items: TopMenu[] = [
    {title: 'Hot', link: ''}, {title: 'Clothes', link: ''}, {title: 'Mobile', link: ''}, {title: 'Computer', link: ''}
  ];

  handleTabSelect(tabMenu: TopMenu) {
    console.log(tabMenu);
  }


}
