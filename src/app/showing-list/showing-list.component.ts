import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../services/movie-api.service';

@Component({
  selector: 'app-showing-list',
  templateUrl: './showing-list.component.html',
  styleUrls: ['./showing-list.component.css']
})
  
export class ShowingListComponent implements OnInit {

  list: any;

  movies = [
    {id:1,name:'Batman',year:1979},
    {id:1,name:'Spiderman',year:2001},
    {id:1,name:'Batman',year:1979},
    {id:1,name:'Spiderman',year:2001},
    {id:1,name:'Batman',year:1979},
    {id:1,name:'Spiderman',year:2001},
    {id:1,name:'Batman',year:1979},
    {id:1,name:'Spiderman',year:2001},
    {id:1,name:'Batman',year:1979},
    {id:1,name:'Spiderman',year:2001},
    {id:1,name:'Batman',year:1979},
    {id:1,name:'Spiderman',year:2001}
  ]
  constructor(private movieapi:MovieApiService) { }

  ngOnInit(): void {
    this.movieapi.get_list().subscribe((data: any) => {
      console.log(data.results)
      this.list = data.results;
    })
  }

}
