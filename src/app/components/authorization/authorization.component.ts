import { Component, DoCheck } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization/authorization.service';

import { ModalAuthorizationService } from 'src/app/services/modals/modal-authorization.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements DoCheck {
  authorization = false;
  name: string | undefined;
  constructor(
    private modalAuthorizationService: ModalAuthorizationService,
    private authorizationService: AuthorizationService
  ) { }


  showModal(): void {
    this.modalAuthorizationService.toggleModal();
  }

  ngDoCheck(): void {
    const user = this.authorizationService.getUser();
    this.authorization = user ? true : false;
    this.name = user?.name;
  }

}
