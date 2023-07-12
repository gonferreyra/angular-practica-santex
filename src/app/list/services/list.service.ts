import { Injectable } from '@angular/core';
import { PriceList } from '../interfaces/list.interface';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  public list: PriceList[] = [
    {
      name: 'Clutch',
      price: '500',
    },
  ];

  constructor() {
    this.loadFromLocalStorage();
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('list')) {
      return;
    }
    this.list = JSON.parse(localStorage.getItem('list')!);
  }

  public saveToLocalStorage() {
    localStorage.setItem('list', JSON.stringify(this.list));
  }
}
