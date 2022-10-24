import { Component, OnInit } from '@angular/core';
import { PokemonListService } from 'src/app/services/pokemon-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pokemons: any[] = [];
  page = 1;
  totalPokemons!: number;
  subscription!: Subscription;

  constructor(private postData: PokemonListService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.postData.getPokemons(30, this.page + 0).subscribe((response: any) => {
      this.totalPokemons = response.count;
      console.log(response.count);

      response.results.forEach((result: any) => {
        this.postData.getMoreData(result.name).subscribe((response: any) => {
          this.pokemons.push(response);
          console.log(this.pokemons);
        });
      });
    });
  }
}
