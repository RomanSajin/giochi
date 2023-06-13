export class Gioco {
  nome: string;
  tipo: string;
  voto: number= 0 ;
  immagine: string;

  constructor(nome: string, tipo: string, voto: number, immagine: string){
    this.nome = nome;
    this.tipo= tipo;
    this.voto= voto;
    this.immagine = immagine;
  }
}
