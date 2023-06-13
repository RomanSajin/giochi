import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Gioco } from '../models/gioco.model';

@Component({
  selector: 'app-lista-giochi',
  templateUrl: './lista-giochi.component.html',
  styleUrls: ['./lista-giochi.component.css']
})
export class ListaGiochiComponent  implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  giochi: Gioco[] = [
    {
      nome: 'Monopoli',
      tipo: 'da tavolo',
      voto: 0,
      immagine: 'https://m.media-amazon.com/images/I/81tF3T9HSWL._AC_UY436_FMwebp_QL65_.jpg'
    },
    {
      nome: 'Fifa',
      tipo: 'videogame',
      voto: 10,
      immagine: 'https://m.media-amazon.com/images/I/61Kda+eUmlL._SX522_.jpg'
    }
  ];

  incrementaVoto(gioco: Gioco) {
    gioco.voto++;
  }

  decrementaVoto(gioco: Gioco) {
    gioco.voto--;
  }
}
