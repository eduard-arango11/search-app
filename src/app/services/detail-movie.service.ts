import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetailMovieService {

  private url: string = "https://api.themoviedb.org/3/movie/";
  private key: string = "?api_key=0ca9ba5dc7030b0c10b24d60533cb44d";

  constructor(private http: HttpClient) { }
}
