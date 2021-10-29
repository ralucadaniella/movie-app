import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/services/movies.service';
import { delay } from 'rxjs/internal/operators/delay';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  topRatedMovies: Movie[] = [];
  responsiveOptions: any;
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];

  constructor(private apiMovies: MoviesService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.apiMovies.topRatedMovies(3).subscribe(
      (allMovies: any) => {
        this.topRatedMovies = allMovies.results;
      },
      (error) => console.log(error)
    );

    this.apiMovies.popularMovies(3).subscribe(
      (allMovies: any) => {
        this.popularMovies = allMovies.results;
      },
      (error) => console.log(error)
    );

    this.apiMovies.upcomingMovies(3).subscribe(
      (allMovies: any) => {
        this.upcomingMovies = allMovies.results;
      },
      (error) => console.log(error)
    );
  }
}
