import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [
  ]
})
export class TarjetasComponent implements OnInit {

  //@Input() items: any[] = [];
  @Input('peliculas') peliculas;
  @Input('titulo') titulo;

  constructor(private router: Router) { }

  verPelicula(item: any) {

    let peliculaId;

    peliculaId = item.id;
    /* let artistaId;

    if (item.type === "album") {
      artistaId = item.id;
    } else {
      artistaId = item.albums[0].id;
    } */

    this.router.navigate(["/pelicula", peliculaId]);
  }

  ngOnInit(): void {
  }

}
