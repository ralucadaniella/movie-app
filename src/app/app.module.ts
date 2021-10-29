import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesGenreComponent } from './components/movies-genre/movies-genre.component';
import { OpenTrailerComponent } from './components/movie-details/open-trailer/open-trailer.component';
import { GenresComponent } from './components/genres/genres.component';
import { WatchlistItemComponent } from './components/watchlist-item/watchlist-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MoviesComponent,
    MovieDetailsComponent,
    FooterComponent,
    SliderComponent,
    WatchlistComponent,
    AddMovieComponent,
    MovieComponent,
    MoviesGenreComponent,
    OpenTrailerComponent,
    GenresComponent,
    WatchlistItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [DatePipe, Pipe],
  bootstrap: [AppComponent],
  entryComponents: [OpenTrailerComponent],
})
export class AppModule {}
