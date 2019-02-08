import {Component, OnInit} from '@angular/core';
import {Post} from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private postList: Post[];

  ngOnInit(): void {
    this.postList = [{
        title: 'Mon Premier post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        loveIts: 0,
        created_at: new Date()
      },
      {
        title: 'Mon Deuxième post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        loveIts: 0,
        created_at: new Date()
      },
      {
        title: 'Mon Troisième post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        loveIts: 0,
        created_at: new Date()
    }];
  }

  get postsList() {
    return this.postList;
  }
}
