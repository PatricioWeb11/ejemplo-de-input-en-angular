import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {

  @Input() personajes: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
