import { Component, DoCheck, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IComments } from 'src/app/interfaces/comments';
import { IUser } from 'src/app/interfaces/users';
import { AuthorizationService } from 'src/app/services/authorization/authorization.service';
import { DataCommentsService } from 'src/app/services/comments/data-comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements DoCheck {

  @Input() filmId?: number;
  commentForm: FormGroup;
  comments: IComments[] = [];
  authorization = false;
  user: IUser | undefined;

  constructor(
    private dataComments: DataCommentsService,
    private authorizationService: AuthorizationService
  ) {
    this.commentForm = new FormGroup({
      comment: new FormControl("", [Validators.required, Validators.minLength(10)])
    });
    this.comments = dataComments.getCommentsByFilm();
    this.user = this.authorizationService.getUser();
    this.authorization = Boolean(this.user);
  }

  submit(): void {
    const valid = this.commentForm.status;
    if (valid === 'VALID' && this.filmId && this.user) {
      const text = this.commentForm.value.comment;
      this.comments = this.dataComments.setCommentByFilm(
        this.filmId,
        this.user.id,
        this.user.name,
        text
      );
      this.commentForm.reset();
    }
  }

  deleteComment(id: number): void {
    this.comments = this.dataComments.deleteComment(id);
  }

  ngDoCheck(): void {
    this.user = this.authorizationService.getUser();
    this.authorization = Boolean(this.user);
    this.comments = this.dataComments.getCommentsByFilm(this.filmId);
  }

}
