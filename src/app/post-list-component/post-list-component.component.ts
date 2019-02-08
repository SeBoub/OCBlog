import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/post';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  @Input() postList: Post;

  constructor() { }

  ngOnInit() {
  }
}
