import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ModalAuthorizationService } from 'src/app/services/modals/modal-authorization.service';
import { UsersService } from 'src/app/services/users/users.service';
import { AuthorizationService } from 'src/app/services/authorization/authorization.service';
@Component({
  selector: 'app-modal-authorization',
  templateUrl: './modal-authorization.component.html',
  styleUrls: ['./modal-authorization.component.scss'],
  providers: [UsersService]
})
export class ModalAuthorizationComponent implements OnInit {

  @ViewChild('modalContainer', { static: false })
  modalContainer?: ElementRef;

  authorizationForm: FormGroup;

  constructor(
    private modalAuthorizationService: ModalAuthorizationService,
    private usersService: UsersService,
    private authorizationService: AuthorizationService
  ) {
    this.authorizationForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      save: new FormControl(false),
    });
  }

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  onClick(event: Event): void {
    const targetElement = event.target as HTMLElement;
    if (
      !targetElement.classList.contains('authorization-btn') &&
      !this.modalContainer?.nativeElement.contains(event?.target)
    ) {
      this.modalAuthorizationService.toggleModal();
    }
  }

  logIn(): void {
    if (this.authorizationForm.status === 'VALID') {
      const login = this.authorizationForm.value.login.trim();
      const password = this.authorizationForm.value.password.trim();

      this.modalAuthorizationService.hide();
      const findUser = this.usersService.getUserByNamePass(login, password);
      if (!findUser) {
        const setUser = this.usersService.setUser(login, password);
        this.authorizationService.setUser(setUser);
      } else {
        this.authorizationService.setUser(findUser);
      }
    }
  }
  ngOnInit(): void {
  }

}
