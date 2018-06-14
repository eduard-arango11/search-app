import { Component, OnInit } from '@angular/core';
import { ResponseDescriptor } from '../../types/search.type';

@Component({
  selector: 'app-page-lists',
  templateUrl: './page-lists.component.html',
  styleUrls: ['./page-lists.component.scss']
})
export class PageListsComponent implements OnInit {

  private moviesResult: ResponseDescriptor = new ResponseDescriptor();

  constructor() { }

  ngOnInit() {
  }

  ListenChild(event){
    this.moviesResult = event;
    console.log(event, "my event");
  }
}
