import { Injectable } from '@angular/core';
import { IGenres } from 'src/app/interfaces/genres';

@Injectable({
  providedIn: 'root'
})
export class DataGenresService {

  private genres: IGenres[] = [
    {
      id: 1,
      image: '../../../assets/image/genres/genre-1.png',
      name: 'Комедии',
      link: '#'
    },
    {
      id: 2,
      image: '../../../assets/image/genres/genre-2.png',
      name: 'Драмы',
      link: '#'
    },
    {
      id: 3,
      image: '../../../assets/image/genres/genre-3.png',
      name: 'Фантастика',
      link: '#'
    },
    {
      id: 4,
      image: '../../../assets/image/genres/genre-4.png',
      name: 'Ужасы',
      link: '#'
    }
  ];

  getGenres(): IGenres[] {
    return this.genres;
  }
}
