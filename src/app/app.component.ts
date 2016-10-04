import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AlienService } from './shared/services/alien.services';
import { OccupationService } from './shared/services/occupation.services';
import { ColonistsService } from './shared/services/colonists.services';
import { EncountersService } from './shared/services/encounters.services';
import { PostsService } from './shared/services/posts.services';



@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [AlienService, OccupationService, ColonistsService, EncountersService, PostsService ],
})

export class AppComponent {
constractor (
  alienService: AlienService,
  occupationService: OccupationService,
  colonistsService: ColonistsService,
  encountersService: EncountersService,
  postsService: PostsService
) {

console.log(alienService, occupationService, colonistsService, encountersService,  postsService );

  }
}
