import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonListService } from 'src/app/services/pokemon-list.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  pokemon: any | undefined;
  pokemonS: any | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonInfoService: PokemonListService
  ) {}

  ngOnInit(): void {
    this.getPokemon();
    this.getPokemonS();
    console.log(this.pokemon);
    console.log(this.getPokemon());
  }

  getPokemon(): void {
    const name = this.route.snapshot.paramMap.get('pokemonName');
    console.log(name);
    this.pokemonInfoService
      .getMoreData(name)
      .subscribe((pokemon) => (this.pokemon = pokemon));
  }

  getPokemonS(): void {
    const name = this.route.snapshot.paramMap.get('pokemonName');
    console.log(name);
    this.pokemonInfoService
      .getPokemonSpeciesData(name)
      .subscribe((pokemonS) => (this.pokemonS = pokemonS));
  }
}
