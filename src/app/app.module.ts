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
import { MenubarModule } from 'primeng/menubar';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AndroidesComponent,
    AndroideComponent,
    BuscadorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule,
    MenubarModule
  ],
  providers: [AndroidesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
