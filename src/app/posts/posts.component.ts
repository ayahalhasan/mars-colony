import { Component, OnInit } from '@angular/core';
import { IPosts } from '../shared/models';
import { PostsService } from '../shared/services/posts.services';

@Component({
  moduleId: module.id,
  selector: 'app-posts',
  templateUrl: 'posts.component.html',
  styleUrls: ['posts.component.css']
})
export class PostsComponent {

	public posts: IPosts;

  constructor(
  	private postsService: PostsService

  	) {

  	postsService.getPosts().then( posts => this.posts = posts)

  }
}
