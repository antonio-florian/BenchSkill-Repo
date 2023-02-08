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
  }

  getPokemon(): void {
    const name = this.route.snapshot.paramMap.get('pokemonName');
    this.pokemonInfoService
      .getMoreData(name)
      .subscribe((pokemon) => (this.pokemon = pokemon));
  }

  getPokemonS(): void {
    const name = this.route.snapshot.paramMap.get('pokemonName');
    this.pokemonInfoService
      .getPokemonSpeciesData(name)
      .subscribe((pokemonS) => (this.pokemonS = pokemonS));
  }
}
