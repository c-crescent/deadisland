import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { GameService } from './services/game.service';
import { CharacterCreationComponent } from './components/character-creation/character-creation.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, MainComponent, CharacterCreationComponent],
  bootstrap: [AppComponent],
  providers: [GameService],
})
export class AppModule {}
