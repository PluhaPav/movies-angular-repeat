import { Component, DoCheck } from '@angular/core';
import { IFilms } from 'src/app/interfaces/films';

import { IGenres } from 'src/app/interfaces/genres';
import { DataFilmsService } from 'src/app/services/films/data-films.service';
import { DataGenresService } from 'src/app/services/genres/data-genres.service';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
  providers: [DataFilmsService, DataGenresService]
})
export class FilmsComponent implements DoCheck {

  films: IFilms[] = [];
  genres: IGenres[] = [];
  search = '';

  constructor(
    private dataFilms: DataFilmsService,
    private dataGenres: DataGenresService,
    private searchService: SearchService
  ) {
    this.films = dataFilms.getFilms();
    this.genres = dataGenres.getGenres();
  }


  ngDoCheck(): void {
    this.search = this.searchService.getSearchString();
  }

}
