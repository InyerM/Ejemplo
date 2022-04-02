import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()

export class RickAndMortyService {

  constructor(private http: HttpClient) { }

  public getCharacters() : Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/character')
  }
}
