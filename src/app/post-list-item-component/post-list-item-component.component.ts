import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() post: Post;


  constructor() { }

  ngOnInit() {
  }

  loveItIncr() {
    this.post.loveIts++;
  }

  loveItDecr() {
    this.post.loveIts--;
  }
}
