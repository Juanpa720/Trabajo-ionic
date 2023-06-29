import { Component, Input, OnInit } from '@angular/core';
import { error } from 'console';
import { RymService } from '../tab1/rym.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  public Characters: any;

  constructor(private rymService: RymService) {}

  ngOnInit(): void {
    this.rymService.getCharacters().subscribe(
      (data) => {
        console.log(data);
        this.Characters = data;
      }
    )
  }
  @Input() name?: string;

}
