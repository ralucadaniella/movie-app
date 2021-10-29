import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl: string = 'https://api.themoviedb.org/3/';
  private apiKey: string = '5f18c3c56b8ee058a8e10b10a31687c2';
  private language: string = 'en-US';
  private region: string = 'US';

  constructor(private http: HttpClient) {}

  getMovies(page: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(
      `${this.baseUrl}movie/now_playing?api_key=${this.apiKey}&page=${page}`
    );
  }

  topRatedMovies(page: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(
      `${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`
    );
  }

  upcomingMovies(page: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(
      `${this.baseUrl}movie/upcoming?api_key=${this.apiKey}&page=${page}`
    );
  }

  popularMovies(page: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(
      `${this.baseUrl}movie/popular?api_key=${this.apiKey}&page=${page}`
    );
  }

  getGenres(): Observable<Movie[]> {
    return this.http.get<Movie[]>(
      `${this.baseUrl}genre/movie/list?api_key=${this.apiKey}`
    );
  }

  getMoviesbyGenre(id: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}genre/${id}/movies?api_key=${this.apiKey}`
    );
  }

  getMovieVideos(id: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/${id}/videos?api_key=${this.apiKey}`
    );
  }

  getMovieImages(id: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/${id}/images?api_key=${this.apiKey}`
    );
  }

  getMovie(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`);
  }

  searchMovies(searchString: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(
      `${this.baseUrl}search/movie?&api_key=${this.apiKey}&query=${searchString}`
    );
  }

  getMovieTrailer(id: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/${id}/videos?type=trailer&api_key=${this.apiKey}`
    );
  }
}

export interface Movie {
  id?: number;
  title: string;
  backdrop_path?: string;
  overview: string;
  vote_average: number;
  release_date: string;
  genre_ids?: [];
  poster_path?: string;
  name?: string;
  original_language?: string;
  status?: string;
  genres?: any;
  popularity?: string;
  production_companies?: any;
  revenue?: string;
  tagline?: string;
  runtime?: any;
  seen: boolean;
  file_path?: string;
}
