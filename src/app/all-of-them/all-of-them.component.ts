import { Component, OnInit } from '@angular/core';
import { PokeService } from '../service/poke-service.service';

@Component({
  selector: 'app-all-of-them',
  templateUrl: './all-of-them.component.html',
  styleUrls: ['./all-of-them.component.css']
})
export class AllOfThemComponent implements OnInit {
  result: any;
  allOfThem = [];
  url: string = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=200';
  constructor(private pokeService: PokeService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.pokeService.getData(this.url)
    .subscribe((response: any) => {
      response.results.forEach(result => {
        this.allOfThem.push(result.name);
      },
      this.url = response.next);
    }
    );
  }

  more() {
    this.getList();
  }
}


