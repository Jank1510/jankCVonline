import { Component, OnInit } from '@angular/core';

interface FocusItem {
  etiqueta: string
  titulo: string
  descripcion: string
  imagen?: string
  alt?: string
  placeholder?: string
}

interface ProcessItem {
  paso: string
  detalle: string
}

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent implements OnInit {
  servicios: FocusItem[]
  impresion3d: FocusItem[]
  trabajosRealizados: FocusItem[]
  proceso: ProcessItem[]

  constructor() {
    this.servicios = [
      {
        etiqueta: 'Servicio prioritario',
        titulo: 'Mantenimiento y reparación de impresoras',
        descripcion: 'Diagnóstico, limpieza, mantenimiento preventivo/correctivo, configuración y recuperación de impresoras para hogar, negocio u oficina.'
      },
      {
        etiqueta: 'Servicio técnico',
        titulo: 'Computadores y optimización',
        descripcion: 'Mantenimiento, formateo, instalación de software, revisión de hardware y mejora de rendimiento para computadores de uso personal o laboral.'
      },
      {
        etiqueta: 'Impresión 3D',
        titulo: 'Piezas y productos personalizados',
        descripcion: 'Litofanías, lámparas personalizadas, llaveros NFC, llaveros normales, piezas funcionales, accesorios para drones y diseños por encargo.'
      },
      {
        etiqueta: 'Servicio complementario',
        titulo: 'Desarrollo web',
        descripcion: 'Páginas y proyectos digitales a medida como apoyo secundario para emprendimientos, marcas o servicios que también necesiten presencia online.'
      }
    ]

    this.impresion3d = [
      {
        etiqueta: 'Destacado',
        titulo: 'Litofanías personalizadas',
        descripcion: 'Fotos convertidas en piezas 3D que cobran vida con luz, ideales para regalos y lámparas.'
      },
      {
        etiqueta: 'Regalos creativos',
        titulo: 'Lámparas personalizadas',
        descripcion: 'Diseños con imágenes, nombres o detalles especiales para regalos únicos.'
      },
      {
        etiqueta: 'Tecnología útil',
        titulo: 'Llaveros NFC',
        descripcion: 'Llaveros personalizados con tecnología NFC para compartir redes, contactos o enlaces.'
      },
      {
        etiqueta: 'Uso diario',
        titulo: 'Piezas funcionales',
        descripcion: 'Soportes, adaptadores, accesorios para drones y piezas útiles hechas a medida.'
      },
      {
        etiqueta: 'A medida',
        titulo: 'Diseños por encargo',
        descripcion: 'Modelado, adaptación o impresión de ideas según la necesidad del cliente.'
      }
    ]

    this.trabajosRealizados = [
      {
        etiqueta: 'Ejemplo 3D',
        titulo: 'Regalos personalizados en 3D',
        descripcion: 'Piezas decorativas con fotos, nombres o detalles especiales para regalos únicos.',
        imagen: './assets/img/trabajos/regalo-personalizado-3d-home.png',
        alt: 'Regalo personalizado impreso en 3D con nombre y foto'
      },
      {
        etiqueta: 'Conectividad',
        titulo: 'Llaveros NFC',
        descripcion: 'Llaveros personalizados para compartir enlaces, redes o información de contacto.',
        imagen: './assets/img/trabajos/llavero-nfc-personalizado.png',
        alt: 'Llavero NFC personalizado para abrir redes sociales desde el celular'
      },
      {
        etiqueta: 'Uso práctico',
        titulo: 'Piezas funcionales',
        descripcion: 'Soportes, accesorios, adaptadores y soluciones impresas en 3D.',
        imagen: './assets/img/trabajos/piezas-funcionales-impresion-3d.png',
        alt: 'Piezas funcionales impresas en 3D para accesorios y repuestos personalizados'
      },
      {
        etiqueta: 'Soporte técnico',
        titulo: 'Servicio técnico de impresoras',
        descripcion: 'Mantenimiento, diagnóstico y reparación de impresoras.',
        imagen: './assets/img/trabajos/servicio-tecnico-impresora-epson.png',
        alt: 'Servicio técnico y mantenimiento de impresora Epson'
      },
      {
        etiqueta: 'Soporte técnico',
        titulo: 'Servicio técnico de computadores',
        descripcion: 'Mantenimiento, optimización, formateo y mejoras de equipos.',
        imagen: './assets/img/trabajos/servicio-tecnico-computadores.png',
        alt: 'Servicio técnico de computadores y mantenimiento de hardware'
      },
      {
        etiqueta: 'Proyecto especial',
        titulo: 'Proyectos personalizados',
        descripcion: 'Desarrollo de ideas a medida combinando diseño 3D, adaptaciones funcionales o soporte según la necesidad.',
        placeholder: 'JankOS'
      }
    ]

    this.proceso = [
      {
        paso: 'Revisar',
        detalle: 'Evaluo el equipo, la necesidad o la idea para definir la mejor solución técnica.'
      },
      {
        paso: 'Solucionar',
        detalle: 'Aplico mantenimiento, reparación, optimización o fabricación según el servicio requerido.'
      },
      {
        paso: 'Entregar',
        detalle: 'Verifico el resultado, explico el trabajo realizado y dejo recomendaciones de uso o mejora.'
      }
    ]
  }

  ngOnInit(): void {
  }
}
