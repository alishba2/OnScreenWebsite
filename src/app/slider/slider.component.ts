import { Component, ViewChild } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faPlay} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent  {
  filmIcon = faFilm;
  plus = faPlus;
  play = faPlay;

  constructor() { }

  ngOnInit(): void {
  }


}
