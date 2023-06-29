import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RymService {
  private baseUrl = 'https://rickandmortyapi.com/api';
  options = {
    headers: new HttpHeaders ({
      'content-type': 'application/json'
  })
}

  constructor(private http: HttpClient) { }

  getCharacters(){
    return this.http.get(this.baseUrl+'/character',this.options)
  }
}
