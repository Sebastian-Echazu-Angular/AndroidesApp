import { Component, OnInit } from '@angular/core';
import { AndroidesService } from 'src/app/service/androides.service';
import { Router } from '@angular/router';
import { Androide } from 'src/app/interface/androide';

@Component({
  selector: 'app-androides',
  templateUrl: './androides.component.html',
  styleUrls: ['./androides.component.css']
})
export class AndroidesComponent implements OnInit {

  androides : Androide[] = [];

  constructor(private _androideService:AndroidesService,private router:Router) { }

  ngOnInit() {
    this.androides = this._androideService.getAndroides();

  }

  public verAndroide(idx:string){ this.router.navigate(['/androide', idx]) }
}
