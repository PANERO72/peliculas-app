import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenPelicula'
})
export class ImagenPeliculaPipe implements PipeTransform {

  transform(pelicula: any, poster: boolean = false): any {
    // path url generica para obtener imagenes
    let url = "http://image.tmdb.org/t/p/w500";

    if(poster){
      return url + pelicula.poster_path;
    }
    
    if(pelicula.backdrop_path){
      return url + pelicula.backdrop_path;
    }else{
      if(pelicula.poster_path){
        return url + pelicula.poster_path;
      }else{
        return "assets/img/no-image.png";
      }
    }
    console.log(pelicula.backdrop_path);
    console.log(pelicula.poster_path);
  }

  //transform(pelicula: any): any {

    // path url generica para obtener imagenes
    /*let url = "http://image.tmdb.org/t/p/w300";

    if (pelicula.poster_path) {
      return url + pelicula.poster_path;
    } else {
      if (pelicula.backdrop_path) {
        return url + pelicula.backdrop_path;
      } else {
        return "assets/img/no-image.png";
      }
    }
  }*/
}