import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';

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
  etiqueta?: string
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

  @ViewChild('viewerVideo', { static: false }) videoRef: ElementRef<HTMLVideoElement> | undefined
  private reproduciendoVideo = false

  constructor() {
    this.productos = [
      {
        name: 'Litofanías y lámparas',
        descripcion: 'Transformación de fotografías en relieves 3D que revelan imágenes al ser iluminados.',
        imagen: './assets/img/trabajos/regalo-personalizado-3d-home.png',
        enlace: '#app-cotizacion',
        catalogo: [
          { tipo: 'video', src: 'https://media.nas-jankos.com/litofanias/litofania-01.mp4', titulo: 'Litofanía iluminada', descripcion: 'Relieve tallado en 3D que revela la imagen al ser iluminada.' },
          { tipo: 'video', src: 'https://media.nas-jankos.com/litofanias/litofania-02.mp4', titulo: 'Litofanía iluminada', descripcion: 'Relieve tallado en 3D que revela la imagen al ser iluminada.' },
          { tipo: 'video', src: 'https://media.nas-jankos.com/litofanias/litofania-03.mp4', titulo: 'Litofanía iluminada', descripcion: 'Relieve tallado en 3D que revela la imagen al ser iluminada.' },
          { tipo: 'video', src: 'https://media.nas-jankos.com/litofanias/litofania-04.mp4', titulo: 'Litofanía iluminada', descripcion: 'Relieve tallado en 3D que revela la imagen al ser iluminada.' },
          { tipo: 'video', src: 'https://media.nas-jankos.com/litofanias/litofania-05.mp4', titulo: 'Litofanía iluminada', descripcion: 'Relieve tallado en 3D que revela la imagen al ser iluminada.' },
          { tipo: 'video', src: 'https://media.nas-jankos.com/litofanias/litofania-06.mp4', titulo: 'Litofanía iluminada', descripcion: 'Relieve tallado en 3D que revela la imagen al ser iluminada.' },
          { tipo: 'video', src: 'https://media.nas-jankos.com/litofanias/litofania-07.mp4', titulo: 'Litofanía iluminada', descripcion: 'Relieve tallado en 3D que revela la imagen al ser iluminada.' }
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
        imagen: 'https://media.nas-jankos.com/prototipado/representacion.svg',
        enlace: '#app-cotizacion',
        etiqueta: 'Representación',
        catalogo: [
          { tipo: 'imagen', src: 'https://media.nas-jankos.com/prototipado/representacion.svg', titulo: 'Representación del proceso', descripcion: 'Ilustración del flujo de trabajo: diseño paramétrico, slicing y manufactura aditiva. Material fotográfico próximamente.' }
        ]
      },
      {
        name: 'Piezas mecánicas y por encargo',
        descripcion: 'Piezas funcionales, repuestos, adaptadores y soportes fabricados bajo medida para reparaciones, sustituciones y proyectos físicos.',
        imagen: './assets/img/trabajos/piezas-funcionales-impresion-3d.png',
        enlace: '#app-cotizacion',
        etiqueta: 'Trabajo real',
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
    setTimeout(() => this.controlarReproduccion(), 60)
  }

  cerrarCatalogo(): void {
    this.detenerVideo()
    this.modalAbierto = false
    this.categoriaActiva = null
    this.indiceActivo = 0
    document.documentElement.style.overflow = ''
  }

  siguiente(): void {
    if (!this.categoriaActiva?.catalogo?.length) return
    this.detenerVideo()
    this.indiceActivo = (this.indiceActivo + 1) % this.categoriaActiva.catalogo.length
    setTimeout(() => this.controlarReproduccion(), 60)
  }

  anterior(): void {
    if (!this.categoriaActiva?.catalogo?.length) return
    this.detenerVideo()
    const n = this.categoriaActiva.catalogo.length
    this.indiceActivo = (this.indiceActivo - 1 + n) % n
    setTimeout(() => this.controlarReproduccion(), 60)
  }

  private detenerVideo(): void {
    const vid = this.videoRef?.nativeElement
    if (vid) {
      this.reproduciendoVideo = false
      vid.pause()
      vid.currentTime = 0
    }
  }

  private controlarReproduccion(): void {
    const item = this.itemActual
    if (item?.tipo !== 'video') {
      this.reproduciendoVideo = false
      return
    }
    const vid = this.videoRef?.nativeElement
    if (vid && !this.reproduciendoVideo) {
      this.reproduciendoVideo = true
      vid.muted = true
      vid.playsInline = true
      vid.currentTime = 0
      vid.play().catch(() => { this.reproduciendoVideo = false })
    }
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
