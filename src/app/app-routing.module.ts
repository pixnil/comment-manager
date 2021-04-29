import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { ListPostsComponent } from './list-posts/list-posts.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListPostsComponent},
  { path: 'posts/:id', pathMatch: 'full', component: DetailPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
