import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Player } from 'src/app/interfaces/player';

@Component({
  selector: 'app-add-edit-player',
  templateUrl: './add-edit-player.component.html',
  styleUrls: ['./add-edit-player.component.css']
})
export class AddEditPlayerComponent implements OnInit {
    form: FormGroup;
    
    constructor(private fb: FormBuilder){
      this.form = this.fb.group({
        nickname: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
        password: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(30)]]
      })  
    }
    
    ngOnInit(): void {
      
    }

    addPlayer(){

      
      const jugador: Player = {
        nickname: this.form.value.nickname,
        p_headshots: 0,
        p_bodyshots: 0,
        p_utilidad: 0
      };
      
    }
}
