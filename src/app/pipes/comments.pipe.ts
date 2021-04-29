import { Comment } from './../services/models/comment.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comments',
  pure: false
})
export class CommentsPipe implements PipeTransform {

  transform(postComments: Comment[], ...filterParams: any): Comment[] {
    return postComments.filter((comment) => {
      return comment.name.includes(filterParams[0].name) && comment.email.includes(filterParams[0].email) && comment.body.includes(filterParams[0].body); 
    });
  }

}
