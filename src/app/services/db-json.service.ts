import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movies.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class DbJsonService {
  public dataBaseUrl: string = 'http://localhost:3000/watchlist/';

  constructor(private http: HttpClient) {}

  public addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.dataBaseUrl}`, movie, httpOptions);
  }

  public getWatchlistMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.dataBaseUrl}`);
  }

  public deleteWatchlistMovie(movie: Movie): Observable<Movie> {
    const url = `${this.dataBaseUrl}/${movie.id}`;
    return this.http.delete<Movie>(url);
  }

  public updateMovieSeen(movie: Movie): Observable<Movie> {
    const url = `${this.dataBaseUrl}/${movie.id}`;
    return this.http.patch<Movie>(url, movie, httpOptions);
  }
}
