import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AndroidesComponent } from './components/androides/androides.component';;
import { AndroidesService } from './service/androides.service';
import { AndroideComponent } from './components/androide/androide.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
// primeng
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AndroidesComponent,
    AndroideComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule
  ],
  providers: [AndroidesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
