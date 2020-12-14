import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchString = '';

  getSearchString(): string {
    return this.searchString;
  }

  setSearchString(searchString: string): void {
    this.searchString = searchString.trim();
  }

  constructor() { }
}
