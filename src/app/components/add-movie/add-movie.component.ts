import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DbJsonService } from 'src/app/services/db-json.service';
import { Movie } from 'src/app/services/movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  @Input() public movie: Movie;

  constructor(private dbJson: DbJsonService) {}

  ngOnInit(): void {}

  public addMovieToWatchlist(): void {
    this.dbJson.addMovie(this.movie).subscribe(() => {
      alert('Movie added to Watchlist');
      console.log(this.movie);
      window.location.reload();
    });
  }
}
