import { Component } from '@angular/core';
import { GameService } from './services/game.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Farmville Idle';

  started = false;
  new = false;

  constructor(private gameService: GameService) {

  }

  ngOnInit(): void {
    this.gameService.loadGame();
  }
}
