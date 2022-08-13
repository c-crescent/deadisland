import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resources } from '../models/resources';
import { skillLevel } from '../models/skills';

@Injectable()
export class GameService {
  constructor() {}

  resources: Resources = {
    wood: 0,
    water: 0,
    food: 0,
  };

  skillRate: Resources = {
    wood: 2,
    water: 1,
    food: 3,
  };

  skills: skillLevel;

  sustenance = {
    hp: 100,
    hunger: 100,
    thirst: 100,
    energy: 100,
    temporaryEnergy: 0,
  };

  time = {
    day: 0,
    hour: 0,
  };

  addResource(resource: string) {
    this.resources[resource] += this.skillRate[resource];
  }

  getResources(): Observable<Resources> {
    return of(this.resources);
  }
}
