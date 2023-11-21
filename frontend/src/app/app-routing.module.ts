import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPlayersComponent } from './components/list-players/list-players.component';
import { PartidasRecientesComponent } from './components/partidas-recientes/partidas-recientes.component';
import { AddEditPartidaComponent } from './components/add-edit-partida/add-edit-partida.component';
import { AddEditPlayerComponent } from './components/add-edit-player/add-edit-player.component';
import { HomeComponent } from './components/home/home.component';

//Componentes
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path : 'players', component: ListPlayersComponent},
  {path: 'add-player', component: AddEditPlayerComponent},
  {path: 'edit-player/:id', component: AddEditPlayerComponent},
  {path : 'partidas', component: PartidasRecientesComponent},
  {path: 'add-player', component: AddEditPartidaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
