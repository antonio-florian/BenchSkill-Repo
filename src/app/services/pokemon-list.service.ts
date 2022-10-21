import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonListService {
  url = 'http://pokeapi.co/api/v2/pokemon/?limit=30&offset=0';

  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get(this.url);
  }
}
