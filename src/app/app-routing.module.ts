import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AndroidesComponent } from './components/androides/androides.component';
import { AboutComponent } from './components/about/about.component';
import { AndroideComponent } from './components/androide/androide.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'androides', component: AndroidesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'androide/:id',component:AndroideComponent},
  { path: 'buscar/:termino', component: BuscadorComponent },
  //ruta de comodin en caso de no encontrar la direccion
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
