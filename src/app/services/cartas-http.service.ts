import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pokemon} from "../models/pokemon";



@Injectable({
  providedIn: 'root'
})
export class CartasHTTPService{

  constructor(private http: HttpClient) { }
  getPokemonID(id: string)
  {
    let url= "https://api.pokemontcg.io/v2/cards/";
    let pokemon:Pokemon;
    url = url.concat(id);

    return this.http.get<any>(url, { headers: new HttpHeaders().set("X-Api-Key", "bbab1d32-a1b4-4918-94e3-b07f8e90ffb7")})


  }
}
