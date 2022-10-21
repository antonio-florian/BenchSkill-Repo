import { Component, OnInit } from '@angular/core';
import { PokemonListService } from 'src/app/services/pokemon-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  data?: any = {};
  subscription!: Subscription;

  constructor(private postData: PokemonListService) {}

  ngOnInit(): void {
    this.postData.getPosts().subscribe((value) => {
      console.log('value', value);
      this.data = [value];
    });
  }
}
