import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = '99e8b325ddc4549403eb67159e10da70';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  public buscar: string;

  constructor(private http: HttpClient) { }

  getPopulares() {

    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp( url, 'callback' )
                    .pipe(
                      map( (res: any) => res.results )
                    );
  }

  getPopularesNinos() {

    const url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp( url, 'callback' )
                    .pipe(
                      map( (res: any) => res.results )
                    );
  }

  getCartelera() {
    const fDesde = new Date();
    let fHasta = new Date();
    fHasta.setDate( fHasta.getDate() + 7 );

    const sDesde = `${ fDesde.getFullYear() }-${ fDesde.getMonth() + 1 }-${ fDesde.getDate() } `;
    const sHasta = `${ fHasta.getFullYear() }-${ fHasta.getMonth() + 1 }-${ fHasta.getDate() } `;

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ sDesde }&primary_release_date.lte=${ sHasta }&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp( url, 'callback' )
                  .pipe(
                    map( (res: any) => res.results )
                  );
  }

  buscarPelicula( texto: string ) {

    const url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp( url, 'callback' )
                  .pipe(
                    map( (res: any) => res.results )
                  );
  }

}
