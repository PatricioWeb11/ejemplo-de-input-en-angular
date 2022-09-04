import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styles: [
  ]
})
export class PadreComponent implements OnInit {

  personaje: string = '';

  personajes: string[] = ['guku', 'gohan', 'trunks', 'vegeta', 'picoro'];

  constructor() { }

  ngOnInit(): void {
  }

  agregar(){
    this.personajes.push(this.personaje);
    this.personaje = '';
  }


}
