import { Component, OnInit, Input } from '@angular/core';
import { GenresDescriptor, GenreDescriptor } from '../../types/genres.type';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  @Input() public allGenres:GenresDescriptor  = new GenresDescriptor();
  @Input() public movieGenresIds: number[] = [];

  public genresToShow: GenreDescriptor[] = [];

  constructor() { }

  ngOnInit() {
    this.toShow();
  }

  toShow() {
    this.movieGenresIds.forEach((item)=>{
      this.genresToShow = this.genresToShow.concat(this.allGenres.genres.filter((element)=>{
        return (item === element.id);
      }));
    });
  }

}
