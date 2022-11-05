import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
width:number
  constructor() {
    this.width=window.screen.width
   }

  ngOnInit(): void {
  }
ajusteResolucion(event:any){
  this.width=(event.target.innerWidth)
}
}
