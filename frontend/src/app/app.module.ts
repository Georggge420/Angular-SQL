import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListPlayersComponent } from './components/list-players/list-players.component';
import { PartidasRecientesComponent } from './components/partidas-recientes/partidas-recientes.component';
import { AddEditPartidaComponent } from './components/add-edit-partida/add-edit-partida.component';
import { AddEditPlayerComponent } from './components/add-edit-player/add-edit-player.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListPlayersComponent,
    PartidasRecientesComponent,
    AddEditPartidaComponent,
    AddEditPlayerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
