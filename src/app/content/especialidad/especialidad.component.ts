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
  proceso: ProcessItem[]

  constructor() {
    this.servicios = [
      {
        etiqueta: 'Soporte operativo',
        titulo: 'Impresoras',
        descripcion: 'Mantenimiento, diagnostico de fallas, limpieza, pruebas, configuracion y recuperacion de funcionamiento.'
      },
      {
        etiqueta: 'Equipos de computo',
        titulo: 'Computadores',
        descripcion: 'Revision de hardware, software, sistema operativo, perifericos, rendimiento y puesta a punto.'
      },
      {
        etiqueta: 'Mesa de ayuda',
        titulo: 'Soporte a usuarios',
        descripcion: 'Atencion tecnica clara, seguimiento de casos, documentacion y solucion practica en entorno de trabajo.'
      },
      {
        etiqueta: 'Mejora continua',
        titulo: 'Prevencion',
        descripcion: 'Mantenimiento preventivo, recomendaciones de uso y control basico para reducir fallas repetidas.'
      }
    ]

    this.proceso = [
      {
        paso: 'Diagnosticar',
        detalle: 'Identifico sintomas, origen de la falla y prioridad del caso.'
      },
      {
        paso: 'Corregir',
        detalle: 'Aplico mantenimiento, configuracion, reparacion o reinstalacion segun el problema.'
      },
      {
        paso: 'Validar',
        detalle: 'Pruebo el equipo, verifico funcionamiento y dejo recomendaciones de uso.'
      }
    ]
  }

  ngOnInit(): void {
  }
}
