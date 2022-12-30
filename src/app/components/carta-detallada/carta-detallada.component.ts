import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {CartasHTTPService} from "../../services/cartas-http.service";

@Component({
  selector: 'app-carta-detallada',
  templateUrl: './carta-detallada.component.html',
  styleUrls: ['./carta-detallada.component.css']
})
export class CartaDetalladaComponent implements OnInit{
 constructor(private ruta:ActivatedRoute, public usersService: CartasHTTPService) {
 }
 data:any;
 ngOnInit() {
   console.log(this.ruta.snapshot.params['id']);
   this.usersService.getPokemonID(this.ruta.snapshot.params['id']).subscribe(data => {this.data = data; console.log(this.data)},
     error =>{console.log("NO HECHO");  this.data=error}, () => {console.log("HECHO");});
 }

}
