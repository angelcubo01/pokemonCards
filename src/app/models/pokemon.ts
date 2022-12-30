export class Pokemon {
  nombre:string;
  imagen:string;

  tipos: string [];
  constructor(nom: string, img: string, tip: string[]) {
    this.nombre = nom;
    this.imagen = img;
    this.tipos = tip
  }

}
