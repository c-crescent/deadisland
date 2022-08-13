import { Component, OnInit } from '@angular/core';
import { Resources } from '../../models/resources';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  resources: Resources = {
    wood: 0,
    water: 0,
    food: 0,
  };

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.getResources();
  }

  getResources() {
    this.gameService.getResources().subscribe((resources) => {
      this.resources = resources;
    });
  }

  addResource(resource: string) {
    this.gameService.addResource(resource);
  }
}
