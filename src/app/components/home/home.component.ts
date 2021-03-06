import { Component, OnInit } from '@angular/core';

// Servicio
import { PeliculasService } from '../../common/services/peliculas.service';
// Interface
import { PopuralesPage, Movie, OriginalLanguage } from '../../common/interfaces/peliculas.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listMovies: Movie[];

  constructor( private movieSrv: PeliculasService ) {
    this.movieSrv.getPopulares().subscribe( (request: PopuralesPage) => {
      console.log(request);
      if (request.results.length > 0 ){
        this.listMovies = request.results;
      }
    });
  }

  ngOnInit(): void {
  }

}
