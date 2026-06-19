import { Component, OnInit } from '@angular/core';

interface FocusItem {
  etiqueta: string
  titulo: string
  descripcion: string
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
        titulo: 'Mantenimiento y reparacion de impresoras',
        descripcion: 'Diagnostico, limpieza, mantenimiento preventivo/correctivo, configuracion y recuperacion de impresoras para hogar, negocio u oficina.'
      },
      {
        etiqueta: 'Servicio tecnico',
        titulo: 'Computadores y optimizacion',
        descripcion: 'Mantenimiento, formateo, instalacion de software, revision de hardware y mejora de rendimiento para computadores de uso personal o laboral.'
      },
      {
        etiqueta: 'Impresion 3D',
        titulo: 'Piezas y productos personalizados',
        descripcion: 'Litofanias, lamparas personalizadas, llaveros NFC, llaveros normales, piezas funcionales, accesorios para drones y disenos por encargo.'
      },
      {
        etiqueta: 'Servicio complementario',
        titulo: 'Desarrollo web',
        descripcion: 'Paginas y proyectos digitales a medida como apoyo secundario para emprendimientos, marcas o servicios que tambien necesiten presencia online.'
      }
    ]

    this.impresion3d = [
      {
        etiqueta: 'Destacado',
        titulo: 'Litofanias personalizadas',
        descripcion: 'Fotos convertidas en piezas 3D que cobran vida con luz, ideales para regalos y lamparas.'
      },
      {
        etiqueta: 'Regalos creativos',
        titulo: 'Lamparas personalizadas',
        descripcion: 'Disenos con imagenes, nombres o detalles especiales para regalos unicos.'
      },
      {
        etiqueta: 'Tecnologia util',
        titulo: 'Llaveros NFC',
        descripcion: 'Llaveros personalizados con tecnologia NFC para compartir redes, contactos o enlaces.'
      },
      {
        etiqueta: 'Uso diario',
        titulo: 'Piezas funcionales',
        descripcion: 'Soportes, adaptadores, accesorios para drones y piezas utiles hechas a medida.'
      },
      {
        etiqueta: 'A medida',
        titulo: 'Disenos por encargo',
        descripcion: 'Modelado, adaptacion o impresion de ideas segun la necesidad del cliente.'
      }
    ]

    this.trabajosRealizados = [
      {
        etiqueta: 'Ejemplo 3D',
        titulo: 'Regalos personalizados en 3D',
        descripcion: 'Piezas decorativas con fotos, nombres o detalles especiales para regalos unicos.'
      },
      {
        etiqueta: 'Conectividad',
        titulo: 'Llaveros NFC',
        descripcion: 'Llaveros personalizados para compartir enlaces, redes o informacion de contacto.'
      },
      {
        etiqueta: 'Uso practico',
        titulo: 'Piezas funcionales',
        descripcion: 'Soportes, accesorios, adaptadores y soluciones impresas en 3D.'
      },
      {
        etiqueta: 'Soporte tecnico',
        titulo: 'Servicio tecnico de impresoras',
        descripcion: 'Mantenimiento, diagnostico y reparacion de impresoras.'
      },
      {
        etiqueta: 'Soporte tecnico',
        titulo: 'Servicio tecnico de computadores',
        descripcion: 'Mantenimiento, optimizacion, formateo y mejoras de equipos.'
      },
      {
        etiqueta: 'Proyecto especial',
        titulo: 'Proyectos personalizados',
        descripcion: 'Desarrollo de ideas a medida combinando diseno 3D, adaptaciones funcionales o soporte segun la necesidad.'
      }
    ]

    this.proceso = [
      {
        paso: 'Revisar',
        detalle: 'Evaluo el equipo, la necesidad o la idea para definir la mejor solucion tecnica.'
      },
      {
        paso: 'Solucionar',
        detalle: 'Aplico mantenimiento, reparacion, optimizacion o fabricacion segun el servicio requerido.'
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
