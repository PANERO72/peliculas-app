import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { PeliculasService } from "./services/peliculas.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ImagenPeliculaPipe } from './pipes/imagen-pelicula.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component'
import { from } from 'rxjs';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    ImagenPeliculaPipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CommonModule,
    HttpClientModule, 
    HttpClientJsonpModule,
    FormsModule
  ],
  providers: [Title, PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }