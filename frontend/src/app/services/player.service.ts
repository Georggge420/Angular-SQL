import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../interfaces/player';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private myAppUrl: string;
  private myApiUrl: string;


  constructor(private http: HttpClient) { 
    this.myAppUrl = 'http://localhost:3000/';
    this.myApiUrl = 'api/players/'
  }

  getListPlayers(): Observable<Player[]>{
    return this.http.get<Player[]>(this.myAppUrl + this.myApiUrl);
  }

  deletePlayer(ID_jugador: number): Observable<void>{
    return this.http.delete<void>(this.myAppUrl + this.myApiUrl+ID_jugador)
  }

  savePlayer(player : Player): Observable<void>{
    return this.http.post<void>(this.myAppUrl + this.myApiUrl, player);
  }

  getplayer(ID_jugador: number): Observable<Player>{
    return this.http.get<Player>(this.myAppUrl + this.myApiUrl+ID_jugador)
  }

  updatePlayer(ID_jugador: number, player1 : Player): Observable<void>{
    return this.http.put<void>(this.myAppUrl + this.myApiUrl+ID_jugador, player1)
  }
}
