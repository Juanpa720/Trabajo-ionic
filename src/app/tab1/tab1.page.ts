import { Component, OnInit } from '@angular/core';
import { RymService } from './rym.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public characters: any;
 
  constructor(private rymService: RymService) {}

  ngOnInit(): void {
    this.rymService.getCharacters().subscribe(
      (data) => {
        this.characters = data;
        console.log(data);
      }
   );
 }
}

