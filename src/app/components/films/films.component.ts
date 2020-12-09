import { Component, OnInit } from '@angular/core';

import { IFilms } from 'src/app/interfaces/films';
import { IGenres } from 'src/app/interfaces/genres';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  films: IFilms[] = [
    {
      image: '../../../assets/image/films/film-1.png',
      name: 'Мульт в кино. Выпуск №103. Некогда грустить!',
      description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
      link: '#'
    },
    {
      image: '../../../assets/image/films/film-2.png',
      name: 'Новый Бэтмен',
      description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
      link: '#'
    },
    {
      image: '../../../assets/image/films/film-3.png',
      name: 'Однажды... в Голливуде',
      description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
      link: '#'
    },
    {
      image: '../../../assets/image/films/film-4.png',
      name: 'Стриптизёрши',
      description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
      link: '#'
    }
  ];

  genres: IGenres[] = [
    {
      image: '../../../assets/image/genres/genre-1.png',
      name: 'Комедии',
      link: '#'
    },
    {
      image: '../../../assets/image/genres/genre-2.png',
      name: 'Драмы',
      link: '#'
    },
    {
      image: '../../../assets/image/genres/genre-3.png',
      name: 'Фантастика',
      link: '#'
    },
    {
      image: '../../../assets/image/genres/genre-4.png',
      name: 'Ужасы',
      link: '#'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
