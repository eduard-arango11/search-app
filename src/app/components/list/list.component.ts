import { Component, OnInit, Input } from '@angular/core';
import { ResponseDescriptor } from '../../types/search.type';
import { GenresDescriptor } from '../../types/genres.type';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() public dataResult:ResponseDescriptor;
  @Input() public allGenres:GenresDescriptor  = new GenresDescriptor();

  constructor() { }

  ngOnInit() {
  }

}
