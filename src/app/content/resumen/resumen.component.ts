import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  width: number

  constructor() {
    this.width = window.innerWidth
  }

  ngOnInit(): void {
  }

  ajusteResolucion(event: Event): void {
    this.width = window.innerWidth
  }
}
