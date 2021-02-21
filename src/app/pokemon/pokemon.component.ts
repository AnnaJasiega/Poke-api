import { Component, Input, OnInit } from '@angular/core';
import { PokeService } from '../service/poke-service.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() name;
  pokemon: any;
  loaded: boolean = false;
  more: boolean = false;
  constructor(private service: PokeService) { }

  ngOnInit(): void {
    this.service.getByName(this.name)
    .subscribe((response: any) => {
      console.log(response),
      this.pokemon = response;
    });
    this.loaded = true;

  }

}
