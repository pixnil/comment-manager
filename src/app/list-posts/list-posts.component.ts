import { PostService } from './../services/post.service';
import { Post } from './../services/models/post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  posts: Post[] = [];
  
  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.getAllPosts().subscribe((postData: Post[]) => {
      if (postData) {
        this.posts = postData;
      }
    });
  }
}
