import { Component, OnInit } from '@angular/core';

interface ProductItem {
  name: string
  descripcion: string
}

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  productos: ProductItem[]

  constructor() {
    this.productos = [
      {
        name: 'Litofanías y lámparas',
        descripcion: 'Transformación de fotografías en relieves 3D que revelan imágenes al ser iluminados.'
      },
      {
        name: 'Llaveros NFC',
        descripcion: 'Llaveros personalizados con tecnología NFC integrada para automatizaciones y contacto rápido.'
      },
      {
        name: 'Prototipado funcional',
        descripcion: 'Materialización de ideas a través de diseño paramétrico y manufactura aditiva.'
      },
      {
        name: 'Piezas mecánicas y por encargo',
        descripcion: 'Diseño y producción de piezas a medida para reparaciones, reemplazos o proyectos físicos.'
      }
    ]
  }

  ngOnInit(): void {
  }
}
