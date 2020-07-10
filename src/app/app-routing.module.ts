import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { BuscarComponent } from "./components/buscar/buscar.component";
import { PeliculaComponent } from './components/pelicula/pelicula.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { titulo: 'Inicio' }},
  { path: 'buscar', component: BuscarComponent, data: { titulo: 'Buscar' } },
  { path: 'buscar/:texto', component: BuscarComponent, data: { titulo: 'Buscar' } },
  { path: 'pelicula/:id/:pag', component: PeliculaComponent, data: { titulo: 'Película'} },
  { path: 'pelicula/:id/:pag/:busqueda', component: PeliculaComponent, data: { titulo: 'Película'} },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }