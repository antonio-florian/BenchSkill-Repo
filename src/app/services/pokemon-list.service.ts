import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonListService {
  url = 'http://pokeapi.co/api/v2/pokemon/?limit=30&offset=0';

  constructor(private http: HttpClient) {}
  getPokemons(limit: number, offset: number) {
    return this.http.get(
      `http://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    );
  }

  getMoreData(name: string | null) {
    return this.http.get(`http://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
