import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  url: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getData(url){
    return this.http.get(url);
  };

  getByName(name){
    return this.http.get(this.url + '/' + name);
  };
}
