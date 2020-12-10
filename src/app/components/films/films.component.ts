import { Component, OnInit } from '@angular/core';
import { IFilms } from 'src/app/interfaces/films';

import { IGenres } from 'src/app/interfaces/genres';
import { DataFilmsService } from 'src/app/services/films/data-films.service';
import { DataGenresService } from 'src/app/services/genres/data-genres.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
  providers: [DataFilmsService, DataGenresService]
})
export class FilmsComponent implements OnInit {

  films: IFilms[] = [];
  genres: IGenres[] = [];

  constructor(private dataFilms: DataFilmsService, private dataGenres: DataGenresService) {
    this.films = dataFilms.getFilms();
    this.genres = dataGenres.getGenres();
  }


  ngOnInit(): void {
  }

}
