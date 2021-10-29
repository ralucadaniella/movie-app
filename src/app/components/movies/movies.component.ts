import { Component, OnInit } from '@angular/core';

import { Movie, MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  public movies: Movie[] = [];
  public searchQuery: string = '';
  constructor(private apiMovies: MoviesService) {}

  ngOnInit(): void {
    this.apiMovies.getMovies(2).subscribe(
      (allMovies: any) => {
        this.movies = allMovies.results;
      },
      (error) => console.log(error)
    );
    console.log(this.movies);

  }

  public updateSearchQuery(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value;
  }

  public searchMovies(): void {
    this.apiMovies
      .searchMovies(this.searchQuery)
      .subscribe((filteredMovies: any) => {
        this.movies = filteredMovies.results;
        this.searchQuery = '';
      });
  }
}
