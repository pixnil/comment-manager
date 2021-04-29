import { Comment } from './../services/models/comment.model';
import { Post } from './../services/models/post.model';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {

  detailPost: Post = {
    id: null,
    body: null,
    userId: null,
    title: null
  };

  postComments: Comment[] = [];

  search = {
    name: '',
    email: '',
    body: ''
  }

  constructor(private postService: PostService, private route: ActivatedRoute, 
    private _location: Location) {
  }

  ngOnInit() {
    const postId: string = this.route.snapshot.params.id;
    this.postService.getDetailPost(postId).subscribe((postData: Post) => {
      if (postData) {
        this.detailPost = postData;
      }
    });

    this.postService.getCommentsByPost(postId).subscribe((comments: Comment[]) => {
      this.postComments = comments;
    });
  }

  goBack() {
    this._location.back();
  }
}
