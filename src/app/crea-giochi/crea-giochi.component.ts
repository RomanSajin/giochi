import { Component, EventEmitter, Output } from '@angular/core';
import { Gioco } from '../models/gioco.model';

@Component({
  selector: 'app-crea-giochi',
  templateUrl: './crea-giochi.component.html',
  styleUrls: ['./crea-giochi.component.css']
})
export class CreaGiochiComponent {
  nome: string = '';
  tipo: string = '';
  voto: number = 0;
  immagine: string = '';

  creaGioco() {


    gioco: Gioco;
    const nuovoGioco: Gioco = {
      nome: this.nome,
      tipo: this.tipo,
      voto: this.voto || 0,
      immagine: this.immagine
    };
    // Aggiungi il nuovo gioco alla lista dei giochi
    // (puoi implementare la logica per l'aggiunta dei giochi nel tuo progetto)

    // Resetta i campi del form
    this.nome = '';
    this.tipo = '';
    this.voto = 0;
    this.immagine = '';

  }

}
