import { Component, OnInit, HostListener } from '@angular/core';

interface CatalogItem {
  tipo: 'imagen' | 'video'
  src: string
  titulo?: string
  descripcion?: string
}

interface ProductItem {
  name: string
  imagen: string
  descripcion: string
  enlace?: string
  catalogo?: CatalogItem[]
}

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  productos: ProductItem[]
  modalAbierto = false
  categoriaActiva: ProductItem | null = null
  indiceActivo = 0

  constructor() {
    this.productos = [
      {
        name: 'Litofanías y lámparas',
        descripcion: 'Transformación de fotografías en relieves 3D que revelan imágenes al ser iluminados.',
        imagen: './assets/img/trabajos/regalo-personalizado-3d-home.png',
        enlace: '#app-cotizacion',
        catalogo: [
          { tipo: 'imagen', src: 'https://media.nas-jankos.com/litofanias/poster-01.webp', titulo: 'Litofanía iluminada', descripcion: 'Relieve 3D que revela la imagen al ser iluminada.' },
          { tipo: 'video', src: 'https://media.nas-jankos.com/litofanias/litofania-01.mp4', titulo: 'Litofanía en proceso', descripcion: 'Detalle del relieve tallado en impresión 3D.' }
        ]
      },
      {
        name: 'Llaveros NFC',
        descripcion: 'Llaveros personalizados con tecnología NFC integrada para automatizaciones y contacto rápido.',
        imagen: './assets/img/trabajos/llavero-nfc-personalizado.png',
        enlace: '#app-cotizacion',
        catalogo: [
          { tipo: 'imagen', src: 'https://media.nas-jankos.com/nfc/foto-1.webp', titulo: 'Llaveros NFC personalizados' },
          { tipo: 'imagen', src: 'https://media.nas-jankos.com/nfc/foto-2.webp', titulo: 'Llaveros NFC personalizados' },
          { tipo: 'imagen', src: 'https://media.nas-jankos.com/nfc/foto-3.webp', titulo: 'Llaveros NFC personalizados' },
          { tipo: 'imagen', src: 'https://media.nas-jankos.com/nfc/foto-4.webp', titulo: 'Llaveros NFC personalizados' },
          { tipo: 'imagen', src: 'https://media.nas-jankos.com/nfc/foto-5.webp', titulo: 'Llaveros NFC personalizados' },
          { tipo: 'video', src: 'https://media.nas-jankos.com/nfc/video-01.mp4', titulo: 'Demostración NFC', descripcion: 'Llavero NFC respondiendo a la lectura.' },
          { tipo: 'video', src: 'https://media.nas-jankos.com/nfc/video-02.mp4', titulo: 'Demostración NFC', descripcion: 'Ejemplo de automatización con llavero NFC.' }
        ]
      },
      {
        name: 'Prototipado funcional',
        descripcion: 'Materialización de ideas a través de diseño paramétrico y manufactura aditiva.',
        imagen: './assets/img/trabajos/placeholder-trabajo.svg',
        enlace: '#app-cotizacion',
        catalogo: [
          { tipo: 'imagen', src: 'https://media.nas-jankos.com/prototipado/representacion.svg', titulo: 'Representación del proceso', descripcion: 'Ilustración del flujo de trabajo: diseño paramétrico, slicing y manufactura aditiva. Material fotográfico próximamente.' }
        ]
      },
      {
        name: 'Piezas mecánicas y por encargo',
        descripcion: 'Diseño y producción de piezas a medida para reparaciones, reemplazos o proyectos físicos.',
        imagen: './assets/img/trabajos/piezas-funcionales-impresion-3d.png',
        enlace: '#app-cotizacion',
        catalogo: [
          { tipo: 'imagen', src: 'https://media.nas-jankos.com/piezas-mecanicas/representacion.svg', titulo: 'Representación de piezas', descripcion: 'Ilustración de piezas funcionales por encargo para reparación y prototipado. Material fotográfico próximamente.' }
        ]
      }
    ]
  }

  ngOnInit(): void {
  }

  get itemActual(): CatalogItem | null {
    if (!this.categoriaActiva || !this.categoriaActiva.catalogo || this.categoriaActiva.catalogo.length === 0) {
      return null
    }
    return this.categoriaActiva.catalogo[this.indiceActivo]
  }

  get dots(): number[] {
    const n = this.categoriaActiva?.catalogo?.length || 0
    return Array.from({ length: n }, (_, i) => i)
  }

  abrirCatalogo(item: ProductItem): void {
    if (!item.catalogo || item.catalogo.length === 0) {
      return
    }
    this.categoriaActiva = item
    this.indiceActivo = 0
    this.modalAbierto = true
    document.documentElement.style.overflow = 'hidden'
  }

  cerrarCatalogo(): void {
    this.modalAbierto = false
    this.categoriaActiva = null
    this.indiceActivo = 0
    document.documentElement.style.overflow = ''
  }

  siguiente(): void {
    if (!this.categoriaActiva?.catalogo?.length) return
    this.indiceActivo = (this.indiceActivo + 1) % this.categoriaActiva.catalogo.length
  }

  anterior(): void {
    if (!this.categoriaActiva?.catalogo?.length) return
    const n = this.categoriaActiva.catalogo.length
    this.indiceActivo = (this.indiceActivo - 1 + n) % n
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (!this.modalAbierto) return
    if (event.key === 'Escape') {
      event.preventDefault()
      this.cerrarCatalogo()
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      this.siguiente()
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      this.anterior()
    }
  }
}
