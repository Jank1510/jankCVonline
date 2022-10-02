import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  dataHabilidades:any
  constructor() {
    this.dataHabilidades=[
      {
        name:'HTML',
        porcentaje:'90%',
        color:'#da4d25'
      },
      {
        name:'CSS',
        porcentaje:'90%',
        color:'#0b6daf'
      },
      {
        name:'JavasCript',
        porcentaje:'70%',
        color:'#db9d26'
      },
      {
        name:'Java',
        porcentaje:'60%',
        color:'#d30308'
      },
      {
        name:'MySQL',
        porcentaje:'50%',
        color:'#005c85'
      },
      {
        name:'Linux',
        porcentaje:'80%',
        color:'#ecb30e'
      },
      {
        name:'Angular',
        porcentaje:'70%',
        color:'#d6002f'
      }

    ]
   }

  ngOnInit(): void {
  }
  

}
