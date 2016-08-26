import { Component} from '@angular/core';
import { Colonist, IOccupation } from '../shared/models';
import { Router } from '@angular/router';
import { ColonistsService} from '../shared/services/colonists.services';
import { OccupationService } from '../shared/services/occupation.services';

@Component({
  moduleId: module.id,
  selector: 'app-arrival',
  templateUrl: 'arrival.component.html',
  styleUrls: ['arrival.component.css']
})
export class ArrivalComponent {

NO_OCCUPATION_SELECTED = '(none)';

// public SERVER_ERROR: string;
public occupation: IOccupation[];
public colonist: Colonist;

  constructor(
    private router: Router,
    private colonistService: ColonistsService,
    private occupationService: OccupationService
  ) {
    this.colonist = new Colonist('', '', this.NO_OCCUPATION_SELECTED);
    occupationService.getOccupations().then(jobs => this.occupation = jobs);
   }

 onSubmit() {
  //  console.log('sub');
    this.colonistService.newColonist(this.colonist).then(colonist => {
      this.router.navigate(['/encounters']);
    }).catch(error => {
      //TODO: handle error
      // this.SERVER_ERROR = 'There was an error processing the colonist.';
    });
  }

  updateColonist(){
    console.log('updating colonist');
    this.colonist = new Colonist('', '', this.NO_OCCUPATION_SELECTED);
  }

  get noOccupation(){
    return this.colonist.job === this.NO_OCCUPATION_SELECTED;
  }

}
