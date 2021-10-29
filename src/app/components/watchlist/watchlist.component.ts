import { Component, OnInit } from '@angular/core';
import { DbJsonService } from 'src/app/services/db-json.service';
import { Movie } from 'src/app/services/movies.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss'],
})
export class WatchlistComponent implements OnInit {
  public watchlistMovies: Movie[] = [];

  constructor(private watchlistService: DbJsonService) {}

  ngOnInit(): void {
    this.watchlistService.getWatchlistMovies().subscribe((allMovies: any[]) => {
      this.watchlistMovies = allMovies;
      console.log(this.watchlistMovies);
    });
  }

  deleteMovie(movie: Movie) {
    this.watchlistService
      .deleteWatchlistMovie(movie)
      .subscribe(
        () =>
          (this.watchlistMovies = this.watchlistMovies.filter(
            (m) => m.id !== movie.id
          ))
      );
    window.location.reload();
  }

  toggleSeen(movie: Movie) {
    movie.seen = !movie.seen;
    this.watchlistService
      .updateMovieSeen(movie)
      .subscribe((movie) => console.log(movie));
  }
}
