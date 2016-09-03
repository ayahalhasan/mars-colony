import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Encounter } from '../shared/models';
import { EncountersService } from '../shared/services/encounters.services';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ROUTER_DIRECTIVES],
})
export class HomeComponent implements OnInit {
  public encounters: Encounter[];

  constructor(
    private router: Router,
    private encounterService: EncountersService
  ) { }

  ngOnInit() {
    this.encounterService.getEncounters().then((result) => {
      this.encounters = result;
    });
  }

}
