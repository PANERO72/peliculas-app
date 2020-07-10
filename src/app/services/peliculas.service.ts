import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  /*private jsonp: Jsonp*/
  private apikey: string = "b8baad22dcc118e610ce534e9af3f23e";
  private urlMovieDB: string = "https://api.themoviedb.org/3";

  peliculas: any[] = [];

  constructor(private http: HttpClient) { }

  // EL SIGUIENTE BLOQUE DE CÓDIGO LO HE COPIADO DEL REPOSITORIO https://github.com/dunapanta/MovieDB-API-Angular-7

  //Metodo para pasar URL para peticion

  getQuery(query: string) {
    //const url = `https://api.themoviedb.org/3${query}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    const url = `${this.urlMovieDB}${query}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    // Si la peticion se hace con http.get da error porque moviedb no acepta cross domain
    //por eso es importante verificar el uso de jsonp para poder hacer solicitud a otros dominios
    return this.http.jsonp(url, "");
  }

  getQueryforPelicula(query: string) {
    //const url = `https://api.themoviedb.org/3${query}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    const url = `${this.urlMovieDB}${query}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    // Si la peticion se hace con http.get da error porque moviedb no acepta cross domain
    //por eso es importante verificar el uso de jsonp para poder hacer solicitud a otros dominios
    return this.http.jsonp(url, "");
  }
 
  // Funciones 
  getCartelera(){
    let desde = new Date();
    let hasta = new Date();

    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDay()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDay()}`;

    return this.getQuery(`/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}`);

  }
 
  getDiscoverMovies() {
    return this.getQuery("/discover/movie?sort_by=popularity.desc").pipe(map((data: any) => data.results));
  }

  getDiscoverMoviesCartelera() {
    return this.getQuery("/discover/movie?sort_by=original_title.asc").pipe(map((data: any) => data.results));
  }

  getDiscoverMoviesKids() {             
    return this.getQuery("/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc").pipe(map((data: any) => data.results));
  }

  getBusquedaPeliculas(termino: string) {
    return this.getQuery(`/search/movie?query=${termino}&sort_by=popularity.desc`).pipe(map((data: any) => {
      this.peliculas = data.results;
      data.results
      console.log(this.peliculas);
    }));
  }

  getPelicula(id: string) {
    return this.getQueryforPelicula(`/movie/${id}`).pipe(map((data: any) => data));
  }

  // Otra alternativa para hacer la peticion
  /*   getDiscoverMovies() {
  const url = `${
    this.urlMoviedb
  }/discover/movie?sort_by=popularity.desc&api_key=${
    this.apikey
  }&language=es&callback=JSONP_CALLBACK`;
  return this.http.jsonp(url, "").pipe(map((res: any) => res.results));
} */
  
  // ESTE MÉTODO ES MIO
  /*obtenerPopulares(){
    let url = `${this.urlMovieDB}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}$language=es&callback=JSONP`;

    return this.http.get(url).pipe(map( res => {
      res.http.jsonp()
    }));
  }*/
  //****************************** */
}