import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {CartasHTTPService} from "../../services/cartas-http.service";

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit{
  @Input() elegido = '3';

  constructor(public usersService: CartasHTTPService) {}
  pokemon = new Pokemon("Cargando","Cargando", ["Cargando"]);
  ngOnInit() {
   this.obtenerPokemon(this.elegido);
  }
  obtenerPokemon(id: string){
  let pokemon = new Pokemon("Error","Error", ["Error"])
  this.usersService.getPokemonID(id).subscribe(data => { pokemon.nombre = data.data.name; pokemon.imagen= data.data.images.small; pokemon.tipos= data.data.types;  this.pokemon = pokemon},
error =>{console.log("NO HECHO"); this.pokemon = pokemon}, () => {console.log("HECHO");});

  }
}
