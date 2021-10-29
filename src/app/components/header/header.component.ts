import { Component, OnInit } from '@angular/core';
import { DbJsonService } from 'src/app/services/db-json.service';
import { Movie } from 'src/app/services/movies.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  watchlistItems: number;

  constructor(private dbjson: DbJsonService) {}

  ngOnInit(): void {
    this.dbjson
      .getWatchlistMovies()
      .subscribe((res: any) => (this.watchlistItems = res.length));
  }
}
