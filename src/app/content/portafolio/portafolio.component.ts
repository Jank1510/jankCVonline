import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  dataPortafolio:any
  hoverEtiqueta:any

  constructor() {
    this.dataPortafolio=[
      {
        imgFondo:'url(https://camo.githubusercontent.com/31ec43e47ddd4d0bd56f6d764e6ee7a4cd27f55e4dca1e459f08a20cc4a51afb/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f715f6175746f2c775f3930302f53637265656e73686f74732f6673336e7267347a6c736e6b3862796e793169742e6a7067)',
        info:"Pagina interactiva de paises usando el api REST Countries V2 API</a>",
        preview:'https://jank1510.github.io/rest-countries-api/',      
        repositorio:'https://github.com/Jank1510/rest-countries-api'  
      }
    ]
    this.hoverEtiqueta=0
   }

  ngOnInit(): void {
  }


}
