import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers:[RickAndMortyService]
})
export class CardComponent implements OnInit {

  characters : any = {}

  constructor(private Service : RickAndMortyService) { 
    this.characters = this.Service.getCharacters().subscribe(characters => {
      this.characters = characters.results
      console.log(this.characters)
    })
  }

  ngOnInit(): void {
  }

}
