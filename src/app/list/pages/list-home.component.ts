import { Component, OnInit } from '@angular/core';
import { PriceList } from '../interfaces/list.interface';
import { ListService } from '../services/list.service';

@Component({
  selector: 'list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.scss'],
})
export class ListHomeComponent implements OnInit {
  public list: PriceList[] = [];
  public isListShowing: boolean = false;

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.list = this.listService.list;
  }

  showList() {
    this.isListShowing = !this.isListShowing;
  }
}
