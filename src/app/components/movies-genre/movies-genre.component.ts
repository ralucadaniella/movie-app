import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-genre',
  templateUrl: './movies-genre.component.html',
  styleUrls: ['./movies-genre.component.scss'],
})
export class MoviesGenreComponent implements OnInit {
  public moviesGenre: any;
  public genreTitle: string;
  public genreId: number;
  constructor(
    private apiMovies: MoviesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.genreId = params['id'];
      this.genreTitle = params['name'];
      this.getMoviesGenre(this.genreId);
    });
  }

  getMoviesGenre(id: number) {
    this.apiMovies.getMoviesbyGenre(id).subscribe((res: any) => {
      this.moviesGenre = res.results;
    });
  }
}
