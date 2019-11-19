import { Component, OnInit } from '@angular/core';
import { Androide } from 'src/app/interface/androide';
import { ActivatedRoute } from '@angular/router';
import { AndroidesService } from 'src/app/service/androides.service';

@Component({
  selector: 'app-androide',
  templateUrl: './androide.component.html',
  styleUrls: ['./androide.component.css']
})
export class AndroideComponent implements OnInit {

  androide: Androide;

  constructor(private activatedRouted: ActivatedRoute, private _androidesService: AndroidesService) {
    this.activatedRouted.params.subscribe(params => {
      console.log(params['id'])
      this.androide = this._androidesService.getAndroideXId(params['id'])
    })
  }
  ngOnInit() {
  }

}
