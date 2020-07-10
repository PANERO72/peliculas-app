import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PeliculasService } from "src/app/services/peliculas.service";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [
  ]
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  regresarA: string = "";
  busqueda: string = "";

  constructor(public peliculasService: PeliculasService, public activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(parametros => {
      console.log(parametros);

      this.regresarA = parametros['pag'];

      if(parametros['busqueda']){
        this.busqueda = parametros['busqueda'];
      }

      this.peliculasService.getPelicula(parametros['id']).subscribe( pelicula => {
        console.log(pelicula);

        this.pelicula = pelicula;
      });
    });
  }

  ngOnInit(): void {
  }

}
