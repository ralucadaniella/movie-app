import { Component, OnInit } from '@angular/core';
import { Movie, MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { OpenTrailerComponent } from './open-trailer/open-trailer.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  public id: number;
  public video: any;
  public relatedvideo: any;
  public movie: Movie;
  public baseUrl = 'https://www.youtube.com/embed/';
  public autoplay = '?rel=0;&autoplay=1&mute=0';
  public images: any = [];
  public videos: any = [];

  constructor(
    private movieService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog
  ) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.movieService.getMovie(this.id).subscribe((currentMovie: Movie) => {
      this.movie = currentMovie;
    });

    this.movieService.getMovieImages(this.id).subscribe((res: any) => {
      this.images = res.backdrops;
    });

    this.movieService.getMovieVideos(this.id).subscribe((res: any) => {
      this.videos = res.results;
    });

    this.movieService.getMovieVideos(this.id).subscribe((res: any) => {
      if (res.results.length) {
        this.video = res.results[0];
        this.relatedvideo = res.results;
      }
    });
  }

  openTrailerMovie(video: any): void {
    this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.baseUrl + video.key + this.autoplay
    );
    console.log(this.video);
    this.dialog.open(OpenTrailerComponent, {
      height: '600px',
      width: '900px',
      data: { video: this.video },
    });
  }
}
