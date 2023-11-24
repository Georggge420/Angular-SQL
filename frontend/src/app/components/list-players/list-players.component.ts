import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Player } from 'src/app/interfaces/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit{
  listPlayers: Player[] =  [];
  loading: boolean = false;

  constructor(private _playerServices : PlayerService, private toastr: ToastrService){
    this.getListProducts();
  }

  ngOnInit(): void {
    
  }

  getListProducts(){
    this.loading = true;
    
      this._playerServices.getListPlayers().subscribe((data) => {
        this.listPlayers = data;
        this.loading = false;
      })
  }

  deletePlayer(ID_jugador: number){
    this.loading = true;
    this._playerServices.deletePlayer(ID_jugador).subscribe((data) => {
      this.getListProducts();
      this.toastr.warning('El jugador fue eliminado con exito', 'Jugador eliminado');
    })
  }
}
