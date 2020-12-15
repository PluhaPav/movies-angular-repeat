import { Component, DoCheck } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
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
    private authorizationService: AuthorizationService,
    private cookieService: CookieService
  ) {
    const user = this.cookieService.get('user');
    if (user.length > 0) {
      this.authorizationService.setUser(JSON.parse(user));
    }
  }


  onClick(): void {
    if (this.authorization) {
      this.cookieService.delete('user');
      this.authorizationService.removeUser();
    } else {
      this.modalAuthorizationService.toggleModal();
    }
  }

  ngDoCheck(): void {
    const user = this.authorizationService.getUser();
    this.authorization = Boolean(user);
    this.name = user?.name;
  }

}
