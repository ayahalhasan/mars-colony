import { Component} from '@angular/core';
import { Encounter } from '../shared/models';
import { IAlien } from '../shared/models';
import { EncountersService } from '../shared/services/encounters.services';
import { AlienService } from '../shared/services/alien.services';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.css']
})

export class ReportComponent {
	NO_ALIEN_SELECTED = `(none)`;

  public encounter: Encounter;
  public aliens: IAlien[];


  constructor(
		private router: Router,
  	private encountersServices: EncountersService,
  	private alienService: AlienService

  	) {

  	this.encounter = new Encounter(this.NO_ALIEN_SELECTED,'','','100');
  	alienService.getAliens().then(alien => this.aliens = alien);
  	}

  	onSubmit(){
       this.encountersServices.newEncounter(this.encounter).then(newEncounter => {
         this.router.navigate(['/encounters']);
       }).catch(error =>{
         //TODO:Handle error
       });
     }

      get noEncounters(){
       return this.encounter.atype === this.NO_ALIEN_SELECTED;
     }



}
