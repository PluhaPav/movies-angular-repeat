import { Injectable, Optional } from '@angular/core';
import { IUser } from 'src/app/interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private userStatus: IUser | undefined = undefined;

  constructor() { }


  getUser(): IUser | undefined {
    return this.userStatus;
  }

  setUser(user: IUser): void {
    this.userStatus = user;
  }

  removeUser(): void {
    this.userStatus = undefined;
  }
}
