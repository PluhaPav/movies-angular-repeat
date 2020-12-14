import { Pipe, PipeTransform } from '@angular/core';

import { IFilms } from 'src/app/interfaces/films';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(films: IFilms[], searchString: string): IFilms[] | [] {
    return films.filter(film => film.name.toLocaleLowerCase().includes(searchString.trim().toLocaleLowerCase()));
  }

}
