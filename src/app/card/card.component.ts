import { Component, OnInit, Input } from '@angular/core';
import { MovieApiService } from '../services/movie-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() movie!: any;
  @Input() posterPath!: string;

  poster_url = '';
  constructor(private movie_api: MovieApiService) {}
  
  ngOnInit(): void {
    console.log(this.movie.poster_path)
    this.posterPath = 'https://image.tmdb.org/t/p/original' + this.movie.poster_path;
    console.log(this.posterPath)
    
  }
}
