import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = "https://tr360-frontend-exam-april.azurewebsites.net/oborsil/movies";
  http: any;

  constructor(private http: HttpClient) { }

  getMovieList(): void {
    this.http.get<Movie[]>(`${this.BASE_URL}`).subscribe(
      list => this.movieList.next(list)
    );
  }

  deleteMovie(movie: Movie): void {
    this.http.delete<Movie>(`${this.BASE_URL} / ${movie.id}`).subscribe(
      () => this.getMovieList()
    )
  }
}
