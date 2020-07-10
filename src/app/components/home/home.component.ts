import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  cartelera: any[] = [];

  populares: any;

  popularesKids: any;

  constructor(public peliculasService: PeliculasService) {

    // this.peliculasService.getCartelera().subscribe((data: any) => {
    //    console.log(data);
    //    this.cartelera = data;
    // });

    this.peliculasService.getDiscoverMovies().subscribe((data: any) => {
      console.log(data);
      this.cartelera = data;
    });

    this.peliculasService.getDiscoverMoviesCartelera().subscribe((data: any) => {
      this.populares = data;
    });

    this.peliculasService.getDiscoverMoviesKids().subscribe((data: any) => {
      this.popularesKids = data;
    })
    
  }

  // cartelera: any[] = [];
  // loading: boolean;

  // constructor(public peliculasService: PeliculasService) {

  //   this.loading = true;

  //  this.peliculasService.getDiscoverMovies()
  // this.cartelera.getCartelera()
  //     .subscribe((data: any) => {

  //       console.log(data);
  //       this.nuevasPeliculas = data;
  //       this.loading = false;
  //     });

  // }


  ngOnInit(): void {
  }

}