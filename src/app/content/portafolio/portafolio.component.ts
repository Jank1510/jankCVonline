import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  dataPortafolio: any
  hoverEtiqueta: any

  constructor() {
    this.dataPortafolio = [
      {
        imgFondo: 'url(https://camo.githubusercontent.com/31ec43e47ddd4d0bd56f6d764e6ee7a4cd27f55e4dca1e459f08a20cc4a51afb/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f715f6175746f2c775f3930302f53637265656e73686f74732f6673336e7267347a6c736e6b3862796e793169742e6a7067)',
        info: "Pagina interactiva de paises usando el api REST Countries V2 API",
        preview: 'https://jank1510.github.io/rest-countries-api/',
        repositorio: 'https://github.com/Jank1510/rest-countries-api',
        var: 'paicesApi'

      },

      {
        imgFondo: 'url(https://camo.githubusercontent.com/8ebc2bd418d284eba180608d7b2fae6aa5dab7382fa9ac2c45b2b11c5bfb5494/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f715f6175746f2c775f3930302f4368616c6c656e6765732f7775646a736276386739336161726c68766275642e6a7067)',
        info: "Sitio web de turismo espacial de varias páginas con detalles específicos que obtienen los datos de un .JSON",
        preview: 'https://jank1510.github.io/space-tourism-website/',
        repositorio: 'https://github.com/Jank1510/space-tourism-website',
        var: 'space'
      },
      {
        imgFondo: 'url(https://camo.githubusercontent.com/91577ac6148b5a1f8a5e16366f2e75df717bc4579eea9ebf653a1dce148ba5a3/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f715f6175746f2c775f3730302f53637265656e73686f74732f626e30716367776563397673706a6378696872672e6a7067)',
        info: "Pagina principal de exposicion de productos",
        preview: 'https://jank1510.github.io/ecommerce-product-page-main/',
        repositorio: 'https://github.com/Jank1510/ecommerce-product-page-main',
        var: 'product'

      }
    ]
    this.hoverEtiqueta = 'none'
    for (let i of this.dataPortafolio) {
      this.mouseFuera(i.var)
    }
  }

  ngOnInit(): void {
  }
  mouseEncima(variable: string): void { variable = 'flex' }

  mouseFuera(variable: string): void { variable = 'none' }


}
