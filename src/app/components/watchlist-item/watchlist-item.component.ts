import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DbJsonService } from 'src/app/services/db-json.service';
import { Movie } from 'src/app/services/movies.service';

@Component({
  selector: 'app-watchlist-item',
  templateUrl: './watchlist-item.component.html',
  styleUrls: ['./watchlist-item.component.scss'],
})
export class WatchlistItemComponent implements OnInit {
  @Input() public movie: Movie;
  @Output() onDeleteMovie: EventEmitter<Movie> = new EventEmitter();
  @Output() onToggleMovie: EventEmitter<Movie> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  deleteMovie(movie: Movie) {
    this.onDeleteMovie.emit(movie);
  }

  toggleSeen(movie: Movie) {
    this.onToggleMovie.emit(movie);
  }
}
