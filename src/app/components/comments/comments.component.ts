import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IComments } from 'src/app/interfaces/comments';
import { DataCommentsService } from 'src/app/services/comments/data-comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  providers: [DataCommentsService]
})
export class CommentsComponent implements OnInit {

  commentForm: FormGroup;
  comments: IComments[] = [];

  constructor(private dataComments: DataCommentsService) {
    this.commentForm = new FormGroup({
      comment: new FormControl("", Validators.required)
    });
    this.comments = dataComments.getCommentsByFilm();
  }

  submit(): void {
    console.log(this.commentForm);
  }

  ngOnInit(): void {
  }

}
