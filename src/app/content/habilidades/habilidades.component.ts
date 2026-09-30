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
        imagen: './assets/img/trabajos/prototipo-electronico.jpg',
        enlace: '#app-cotizacion',
        etiqueta: 'Trabajo real',
        catalogo: [
          { tipo: 'video', src: 'https://media.nas-jankos.com/prototipado/opt_20260708_204611.mp4', titulo: 'Prototipo en acción', descripcion: 'Muestra funcional de prototipo impreso en 3D.' },
          { tipo: 'video', src: 'https://media.nas-jankos.com/prototipado/opt_20260426_131421.mp4', titulo: 'Mecanismo articulado', descripcion: 'Prueba de concepto funcional.' },
          { tipo: 'video', src: 'https://media.nas-jankos.com/prototipado/opt_20260418_220939.mp4', titulo: 'Ensamblaje y pruebas', descripcion: 'Validación de tolerancias mecánicas.' },
          { tipo: 'imagen', src: './assets/img/trabajos/prototipo-electronico.jpg', titulo: 'Prototipo electrónico', descripcion: 'Diseño y fabricación de carcasa para electrónica.' },
          { tipo: 'imagen', src: 'https://media.nas-jankos.com/prototipado/20260327_205108.jpg', titulo: 'Carcasa a medida', descripcion: 'Prototipo de carcasa diseñada para electrónica.' },
          { tipo: 'imagen', src: 'https://media.nas-jankos.com/prototipado/image-1785676752215.jpg', titulo: 'Geometría y diseño', descripcion: 'Diseño 3D de alta precisión para fabricación.' }
        ]
      },
      {
        name: 'Piezas mecánicas',
        descripcion: 'Piezas funcionales, repuestos, adaptadores y soportes fabricados bajo medida para reparaciones y proyectos físicos.',
        imagen: './assets/img/trabajos/piezas-funcionales-impresion-3d.png',
        enlace: '#app-cotizacion',
        etiqueta: 'Trabajo real',
        catalogo: [
          { tipo: 'imagen', src: './assets/img/trabajos/piezas-funcionales-impresion-3d.png', titulo: 'Piezas de recambio', descripcion: 'Componentes impresos para mecanismos funcionales.' },
          { tipo: 'imagen', src: 'https://media.nas-jankos.com/piezas-mecanicas/Impresion-3d-piezas-impresora-3D.jpg', titulo: 'Repuestos a medida', descripcion: 'Sustitución de piezas mecánicas discontinuadas o rotas.' },
          { tipo: 'imagen', src: 'https://media.nas-jankos.com/piezas-mecanicas/Tecnologia-Robocasting-BCN-3D-CERAMICS2.jpg', titulo: 'Aplicaciones industriales', descripcion: 'Uso de materiales técnicos para resistencia mecánica y térmica.' },
          { tipo: 'imagen', src: 'https://media.nas-jankos.com/piezas-mecanicas/image2.webp', titulo: 'Engranajes y mecanismos', descripcion: 'Impresión de sistemas mecánicos completamente funcionales.' }
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
