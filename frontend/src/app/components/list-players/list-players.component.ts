import { Component, OnInit} from '@angular/core';
import { Player } from 'src/app/interfaces/player';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit{
  listPlayers: Player[] =  [
    {id : 1, nickname: 'Hola321', p_headshots : 30, p_bodyshots : 40, p_utilidad : 30},
    {id : 5, nickname: 'putos', p_headshots : 2, p_bodyshots : 1, p_utilidad : 40}
  ];

  constructor(){}

  ngOnInit(): void {
      
  }
}
