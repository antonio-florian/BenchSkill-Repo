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
  Offset = 0;

  constructor(private postData: PokemonListService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.postData.getPokemons(30, this.Offset).subscribe((response: any) => {
      this.totalPokemons = 60;
      if (this.page === 1) {
        this.Offset += 30;
      } else if (this.page == 2) {
        this.Offset -= 30;
      }
      console.log;

      response.results.forEach((result: any) => {
        this.postData.getMoreData(result.name).subscribe((response: any) => {
          this.pokemons.push(response);
          console.log(this.pokemons);
        });
      });
    });
  }
}
