import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Player } from 'src/app/interfaces/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-edit-player',
  templateUrl: './add-edit-player.component.html',
  styleUrls: ['./add-edit-player.component.css']
})
export class AddEditPlayerComponent implements OnInit {
    form: FormGroup;
    loading: boolean = false;
    id: number;
    operacion: string = 'Agregar ';
    
    constructor(private fb: FormBuilder,
      private _playerService: PlayerService,
      private router: Router,
      private toast: ToastrService,
      private aRouter:ActivatedRoute){
      this.form = this.fb.group({
        nickname: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
        password: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
        id_juegos: ['',[Validators.required]]
      })
      this.id = Number(aRouter.snapshot.paramMap.get('id'));
    }
    
    ngOnInit(): void {
      if (this.id != 0) {
        this.operacion = 'Editar '
        this.getProduct(this.id)
      } 
    }

    addPlayer(){
      const jugador: Player = {
        nickname: this.form.value.nickname,
        password: this.form.value.password,
        id_juegos  : this.form.value.id_juegos
      };
      this.loading = true;

      if (this.id != 0) {
        //Editar
        this._playerService.updatePlayer(this.id, jugador). subscribe(() => {
          jugador.ID_jugador = this.id;
          this.toast.success(`El jugador ${jugador.nickname} se actualizo con extio`, 'Player Actualizado');
          this.router.navigate(['/players']);
          this.loading = false;
        })
      } else {
        //Agregar
        this._playerService.savePlayer(jugador).subscribe(() => {
          this.toast.success(`El jugador ${jugador.nickname} se ingreso con extio`, 'Player Regsitrado');
          this.router.navigate(['/players']);
          this.loading = false;
        })
      }
      
      
    }

    getProduct(ID_jugador: number){
      this.loading = true;
      this._playerService.getplayer(ID_jugador).subscribe((data:Player) =>{
        this.loading = false;
        this.form.setValue({
          nickname: data.nickname,
          password: data.password,
          id_juegos: data.id_juegos
        })
      })
    }
}
