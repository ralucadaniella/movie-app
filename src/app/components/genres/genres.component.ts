import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  public genreList: any;

  constructor(private apiMovies: MoviesService) {}

  ngOnInit(): void {
    this.apiMovies.getGenres().subscribe((results: any) => {
      this.genreList = results.genres;
    });

    console.log(this.genreList);
  }
}
