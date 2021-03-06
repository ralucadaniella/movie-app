import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() movieItem: Movie;

  constructor() {}

  ngOnInit(): void {}
}
