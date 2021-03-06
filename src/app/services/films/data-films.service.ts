import { Injectable } from '@angular/core';

import { IFilms } from 'src/app/interfaces/films';

@Injectable({
  providedIn: 'root'
})
export class DataFilmsService {

  private films: IFilms[] = [
    {
      id: 1,
      image: '../../../assets/image/films/film-1.png',
      name: 'Мульт в кино. Выпуск №103. Некогда грустить!',
      country: 'США, Германия',
      genre: 'Комедия',
      description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
      link: '#'
    },
    {
      id: 2,
      image: '../../../assets/image/films/film-2.png',
      name: 'Новый Бэтмен',
      country: 'США, Германия',
      genre: 'Комедия',
      description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
      link: '#'
    },
    {
      id: 3,
      image: '../../../assets/image/films/film-3.png',
      name: 'Однажды... в Голливуде',
      country: 'США, Германия',
      genre: 'Комедия',
      description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
      link: '#'
    },
    {
      id: 4,
      image: '../../../assets/image/films/film-4.png',
      name: 'Стриптизёрши',
      country: 'США, Германия',
      genre: 'Комедия',
      description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
      link: '#'
    },
    {
      id: 5,
      image: '../../../assets/image/films/film-4.png',
      name: 'Что',
      country: 'США, Германия',
      genre: 'Комедия',
      description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
      link: '#'
    },
    {
      id: 6,
      image: '../../../assets/image/films/film-4.png',
      name: 'Новый Халк',
      country: 'США, Германия',
      genre: 'Комедия',
      description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
      link: '#'
    },
    {
      id: 7,
      image: '../../../assets/image/films/film-5.webp',
      name: 'Хоббит',
      country: 'США, Германия',
      genre: 'Комедия',
      description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
      link: '#'
    }
  ];

  getFilms(): IFilms[] {
    return this.films;
  }
  getFilm(id: number): IFilms | undefined {
    return this.films.find(film => film.id === id);
  }
}
