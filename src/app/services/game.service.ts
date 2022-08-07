import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resources } from '../models/resources';

@Injectable()
export class GameService {
  constructor() {}

  resources: Resources = {
    wood: 0,
    water: 0,
    food: 0,
  };

  addWood(amount: number) {
    this.resources.wood += amount;
  }

  getResources(): Observable<Resources> {
    return of(this.resources);
  }
}
