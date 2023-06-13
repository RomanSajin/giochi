import { Component } from '@angular/core';
import { Gioco } from '../models/gioco.model';

@Component({
  selector: 'app-giochi',
  templateUrl: './giochi.component.html',
  styleUrls: ['./giochi.component.css']
})
export class GiochiComponent {
  giochi: Gioco[] = [
    {
      nome: 'Call of Duty',
      tipo: 'videogame',
      voto: 10,
      immagine: ''
    },
    {
      nome: 'Spiderman',
      tipo: 'videogame',
      voto: 0,
      immagine: ''
    }
  ];

  incrementaVoto(gioco: Gioco) {
    gioco.voto++;
  }

  decrementaVoto(gioco: Gioco) {
    gioco.voto--;
  }

  onCreaGioco(gioco: Gioco){
    
  }
}
