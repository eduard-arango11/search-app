import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GenresDescriptor } from '../types/genres.type';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  private url: string = "https://api.themoviedb.org/3/genre/movie/list?api_key=0ca9ba5dc7030b0c10b24d60533cb44d";

  constructor(private http: HttpClient) {  }

  getAll() {
    return this.http
      .get(this.url)
      .pipe(
        map((data)=>{
          return GenresDescriptor.import(data);
        })
      );
  }

}