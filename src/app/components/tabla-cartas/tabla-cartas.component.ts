import {Component, OnInit} from '@angular/core';
import { CartasHTTPService} from "../../services/cartas-http.service";
import {Pokemon} from "../../models/pokemon";

const generaciones:String[] = [ 'swsh12-', 'pgo-', 'swsh11-','swsh10-','swsh3-','swsh4-','swsh35-'];
@Component({
  selector: 'app-tabla-cartas',
  templateUrl: './tabla-cartas.component.html',
  styleUrls: ['./tabla-cartas.component.css']
})
export class TablaCartasComponent {
  numero = 0;
  miarray: string[];
  constructor() {
    this.miarray = [];
  }
generarAleatorio(num: number){
  this.miarray=[];
    console.log(num);
    const nGeneraciones = generaciones.length;
    var resultado;
    let numeroElegido;
    let generacionElegida;

  for (let i = 0; i < num; i++) {
    numeroElegido = Math.floor((Math.random() * (30 - 1 + 1)) + 1);
    generacionElegida = Math.floor((Math.random() * (nGeneraciones - 1 - 0 + 1)) + 0);
    resultado = generaciones[generacionElegida].concat(numeroElegido.toString());
    console.log(resultado);
    this.miarray.push(resultado);
  }
}

}
