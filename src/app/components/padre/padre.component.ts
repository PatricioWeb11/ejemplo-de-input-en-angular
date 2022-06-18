import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styles: [
  ]
})
export class PadreComponent implements OnInit {

  personajes: string[] = ['guku', 'gohan', 'trunks', 'vegeta', 'picoro'];

  constructor() { }

  ngOnInit(): void {
  }


}
