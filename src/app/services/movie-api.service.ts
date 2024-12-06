import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  url_list = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
  movie_url = 'https://api.themoviedb.org/3/movie/1241982?language=en-US';
  constructor(private http: HttpClient) {}

  options1 = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2U0NzhmMzBlYTk1N2Q4MzIxNDQ4NDIyNDI5OTFiNSIsIm5iZiI6MTcwNTUxNzQ2NS41NDEsInN1YiI6IjY1YTgyMTk5MTEzODZjMDEyOGU2MzFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DoT2V-qOj2lfxIk9-DGSs_Zjpt5O_TwRyWJ_2APizdo',
    },
  };

  options2 = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2U0NzhmMzBlYTk1N2Q4MzIxNDQ4NDIyNDI5OTFiNSIsIm5iZiI6MTcwNTUxNzQ2NS41NDEsInN1YiI6IjY1YTgyMTk5MTEzODZjMDEyOGU2MzFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DoT2V-qOj2lfxIk9-DGSs_Zjpt5O_TwRyWJ_2APizdo',
    },
  };

  get_list() {
    return this.http.get(this.url_list, this.options1);
  }
  
}
