import { Component, OnInit } from '@angular/core';

// Servicio
import { PeliculasService } from '../../common/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  buscar = '';

  constructor( private movieSrv: PeliculasService ) { }

  ngOnInit(): void {
  }

  buscaPelicula() {
    if (this.buscar.length === 0 ) {
      return;
    } else {
      this.movieSrv.buscarPelicula(this.buscar)
                  .subscribe( (res: any)  => {
                    console.log(res);
                  });
    }
  }

}
