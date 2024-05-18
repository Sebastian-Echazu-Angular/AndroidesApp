import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  constructor(private router: Router) { }

  ngOnInit() {

    this.items = [
      { label: 'home', routerLink: '/', icon: 'pi pi-home' },
      { label: 'androides', routerLink: '/androides'  },
      { label: 'About'  , routerLink: '/about' }
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

  }

  buscarAndroides(textoBusqueda: string) {
    this.router.navigate(['/buscar', textoBusqueda]);
  }

}
