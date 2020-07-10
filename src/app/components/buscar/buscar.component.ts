import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  buscar: string = "";

  loading: boolean;

  constructor(public peliculasService: PeliculasService, public activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(parametros => {
      if(parametros['texto']){
        this.buscar = parametros['texto'];
        this.buscarPelicula();
      }
    });
  }
  
  ngOnInit(): void {
  }
  
  buscarPelicula(){
    if(this.buscar.length === 0){
      return;
    }
    this.loading = true;
    this.peliculasService.getBusquedaPeliculas(this.buscar).subscribe((data: any) => {
      console.log(data);

      //this.peliculas = data;
      this.loading = false;
    });
  }
}
