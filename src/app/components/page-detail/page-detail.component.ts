import { Component, OnInit } from '@angular/core';
import { DetailMovieService } from '../../services/detail-movie.service';
import { ActivatedRoute } from '@angular/router';
import { MovieDescriptor } from '../../types/detail.type';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss']
})
export class PageDetailComponent implements OnInit {

  public movie: MovieDescriptor = new MovieDescriptor();
  private sub: any;

  constructor(
    private detailMovieService: DetailMovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        let id:number = +params['id'];
        this.detailMovieService.getDetails(id).subscribe(
          (data) => {
            this.movie= data;
          }
        );
      }
    )
  }

}
