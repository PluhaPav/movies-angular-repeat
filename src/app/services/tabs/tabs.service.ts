import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  private currentIndexTab = 0;

  setIndex(index: number): number {
    this.currentIndexTab = index;
    return this.currentIndexTab;
  }

  getIndex(): number {
    return this.currentIndexTab;
  }

  constructor() { }
}
