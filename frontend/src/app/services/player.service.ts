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
}
