import { Injectable } from '@angular/core';

import { IComments } from 'src/app/interfaces/comments';

@Injectable({
  providedIn: 'root'
})
export class DataCommentsService {

  private lastIdComments = 6;
  private comments: IComments[] = [
    {
      id: 1,
      authorId: 1,
      filmId: 2,
      name: 'Nickname',
      comment: 'По моему ни на что не претендующему мнению, если человеку нужна особая причина, чтобы посмотреть Тарантино, то тут одно из двух: либо совсем уж вкусы разнятся, либо кинематограф, как явление человеку безразличен. Во всех остальных случаях имя режиссера говорит само за себя — надо смотреть.'
    },
    {
      id: 2,
      authorId: 2,
      filmId: 2,
      name: 'Мой ник',
      comment: 'Мой комментарий о сюжете что-то кроме завязки категорически бессмысленно. Это фильм Тарантино — его надо смотреть самому.'
    },
    {
      id: 3,
      authorId: 3,
      filmId: 2,
      name: 'pasha_cinema',
      comment: 'Главный эмоциональный удар лента наносит в самом конце. Когда фильм после мастерского нагнетания сбрасывает оковы и пускается во все тяжкие. Финальные сцены являют собой нечто фантастическое. Они веселят и напрягают одновременно. Это действительно шедевральный отрывок, который будут помнить, но он ничто по сравнению с самым последним диалогом, от которого становится очень хорошо, но в то же время бесконечно грустно.'
    },
    {
      id: 4,
      authorId: 2,
      filmId: 2,
      name: 'Мой ник',
      comment: 'По моему ни на что не претендующему мнению, если человеку нужна особая причина, чтобы посмотреть Тарантино, то тут одно из двух: либо совсем уж вкусы разнятся, либо кинематограф, как явление человеку безразличен. Во всех остальных случаях имя режиссера говорит само за себя — надо смотреть.'
    },
    {
      id: 5,
      authorId: 1,
      filmId: 2,
      name: 'Nickname',
      comment: 'По моему ни на что не претендующему мнению, если человеку нужна особая причина, чтобы посмотреть Тарантино, то тут одно из двух: либо совсем уж вкусы разнятся, либо кинематограф, как явление человеку безразличен. Во всех остальных случаях имя режиссера говорит само за себя — надо смотреть.'
    },
    {
      id: 6,
      authorId: 3,
      filmId: 2,
      name: 'pasha_cinema',
      comment: 'По моему ни на что не претендующему мнению, если человеку нужна особая причина, чтобы посмотреть Тарантино, то тут одно из двух: либо совсем уж вкусы разнятся, либо кинематограф, как явление человеку безразличен. Во всех остальных случаях имя режиссера говорит само за себя — надо смотреть.'
    },
  ];

  getCommentsByFilm(): IComments[] {
    return this.comments;
  }

  setCommentByFilm(filmId: number, authorId: number, comment: string): void {
    this.comments.push({
      id: ++this.lastIdComments,
      authorId,
      filmId,
      name: '',
      comment
    });
  }

}