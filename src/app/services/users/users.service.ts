import { Injectable } from '@angular/core';

import { IUser } from 'src/app/interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private lastIndex = 1;
  private users: IUser[] = [
    {
      id: 1,
      name: 'Testov T.T.',
      password: '1234'
    },
  ];

  getLastIndex(): number {
    return this.lastIndex;
  }

  setUser(name: string, password: string): IUser {
    this.users.push({
      id: ++this.lastIndex,
      name,
      password
    });
    return this.users[this.lastIndex - 1];
  }

  getUsers(): IUser[] {
    return this.users;
  }

  getUserById(userId: number): IUser | undefined {
    return this.users.find(user => user.id === userId);
  }


  getUserByNamePass(name: string, password: string): IUser | undefined {
    return this.users.find(user => user.name === name.trim() && user.password === user.password.trim());
  }
}
