import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataFilmsService } from 'src/app/services/films/data-films.service';
import { IFilms } from 'src/app/interfaces/films';

@Component({
  selector: 'app-single-film',
  templateUrl: './single-film.component.html',
  styleUrls: ['./single-film.component.scss']
})
export class SingleFilmComponent implements OnInit {

  idFilm: number;
  film: IFilms | undefined;
  authorization = false;

  constructor(
    private location: Location,
    private dataFilms: DataFilmsService,
    private activeRouter: ActivatedRoute
  ) {
    this.idFilm = +activeRouter.snapshot.params['id'];
    this.film = dataFilms.getFilm(this.idFilm);
  }

  goBack(): void {
    this.location.back();
  }
  ngOnInit() { }

}
