import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { GameService } from './services/game.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MainComponent],
  bootstrap: [AppComponent],
  providers: [GameService],
})
export class AppModule {}
