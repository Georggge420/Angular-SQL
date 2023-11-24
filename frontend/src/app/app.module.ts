import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



//Modulos
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
 
//Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListPlayersComponent } from './components/list-players/list-players.component';
import { PartidasRecientesComponent } from './components/partidas-recientes/partidas-recientes.component';
import { AddEditPartidaComponent } from './components/add-edit-partida/add-edit-partida.component';
import { AddEditPlayerComponent } from './components/add-edit-player/add-edit-player.component';
import { HomeComponent } from './components/home/home.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListPlayersComponent,
    PartidasRecientesComponent,
    AddEditPartidaComponent,
    AddEditPlayerComponent,
    HomeComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
