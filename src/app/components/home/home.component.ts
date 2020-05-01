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
  listPopulares: Movie[];
  listNinos: Movie[];
  listCartelera: Movie[];

  constructor( private movieSrv: PeliculasService ) {
    this.movieSrv.getPopulares().subscribe( (request: any) => {
      console.log(request);
      if (request.length > 0 ) {
        this.listPopulares  = request;
        this.listMovies = this.listPopulares;
      }
    });

    this.movieSrv.getPopularesNinos().subscribe( (request: any) => {
      console.log(request);
      if (request.length > 0 ) {
        this.listNinos  = request;
      }
    });

    this.movieSrv.getCartelera().subscribe( (request: any) => {
      console.log(request);
      if (request.length > 0 ) {
        this.listCartelera  = request;
      }
    });
  }

  ngOnInit(): void {
  }

  setNinos() {
    this.listMovies = this.listNinos;
  }

}
