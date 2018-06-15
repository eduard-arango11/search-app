import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ResponseDescriptor } from '../types/search.type';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private url: string = "https://api.themoviedb.org/3/search/movie?api_key=0ca9ba5dc7030b0c10b24d60533cb44d&query=";

  constructor(private http: HttpClient) {  }

  search(term: string) {
    return this.http
      .get(this.url + term)
      .pipe(
        map((data)=>{
          return ResponseDescriptor.import(data);
        })
      );

  }
}
