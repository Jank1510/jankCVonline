import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  positionBackground:string

  constructor() { 
    this.positionBackground=''
  }

  ngOnInit(): void {
  }
  mouseMove(e:any){
    this.positionBackground=((e.y)-(e.y/1.003)).toString()+'px'+' '+((e.x)-(e.x/1.003)).toString()+'px'
  }

}
