import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  positionBackground: string

  constructor() { 
    this.positionBackground=''
  }

  ngOnInit(): void {
  }
  mouseMove(event: MouseEvent): void {
    this.positionBackground = `${event.y - event.y / 1.003}px ${event.x - event.x / 1.003}px`
  }

}
