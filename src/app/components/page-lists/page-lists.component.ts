import { Component, OnInit } from '@angular/core';
import { ResponseDescriptor } from '../../types/search.type';
import { GenresDescriptor } from '../../types/genres.type';
import { GenresService } from '../../services/genres.service';

@Component({
  selector: 'app-page-lists',
  templateUrl: './page-lists.component.html',
  styleUrls: ['./page-lists.component.scss']
})
export class PageListsComponent implements OnInit {

  private moviesResult: ResponseDescriptor = new ResponseDescriptor();
  public allGenres: GenresDescriptor = new GenresDescriptor();

  constructor(
    private genresService: GenresService
  ) { }

  ngOnInit() {
    this.genresService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.allGenres = data;
      }
    );
  }

  ListenChild(event){
    this.moviesResult = event;
    console.log(event, "my event");
  }
}
