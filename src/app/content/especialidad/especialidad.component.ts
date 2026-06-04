import { Component, OnInit } from '@angular/core';

interface FocusItem {
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
  enfoque: FocusItem[]
  proceso: ProcessItem[]

  constructor() {
    this.enfoque = [
      {
        titulo: 'Impresoras',
        descripcion: 'Mantenimiento, diagnostico de fallas, limpieza, pruebas y recuperacion de funcionamiento.'
      },
      {
        titulo: 'Computadores',
        descripcion: 'Revision de hardware, software, sistema operativo, configuracion y puesta a punto.'
      },
      {
        titulo: 'Soporte a usuarios',
        descripcion: 'Atencion tecnica clara, seguimiento de casos y solucion practica en entorno de trabajo.'
      },
      {
        titulo: 'Prevencion',
        descripcion: 'Mantenimiento preventivo para reducir fallas repetidas y mantener los equipos disponibles.'
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
