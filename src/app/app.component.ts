import { Component } from '@angular/core';
import { AlienService } from './shared/services/alien.services';
import { OccupationService } from './shared/services/occupation.services';
import { ColonistsService } from './shared/services/colonists.services';
import { EncountersService } from './shared/services/encounters.services';



@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [AlienService, OccupationService, ColonistsService, EncountersService ],
})
export class AppComponent {
constractor (
  alienService: AlienService,
  occupationService: OccupationService,
  colonistsService: ColonistsService,
  encountersService: EncountersService
) {

console.log(alienService, occupationService, colonistsService, encountersService );

  }
}
