import { Component, OnInit } from '@angular/core';

interface ExperienceItem {
  cargo: string
  empresa: string
  periodo: string
  ubicacion: string
  descripcion: string
  responsabilidades: string[]
  logros: string[]
  aptitudes: string[]
}

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: ExperienceItem[]

  constructor() {
    this.experiencias = [
      {
        cargo: 'Soporte TI y mantenimiento tecnologico',
        empresa: 'Multitintas INK',
        periodo: 'Abr. 2025 - actualidad',
        ubicacion: 'Bucaramanga, Santander, Colombia - Presencial',
        descripcion: 'Rol enfocado en soporte tecnico operativo, mantenimiento de impresoras y computadores, diagnostico de fallas de hardware/software y configuracion de sistemas para usuarios y equipos de trabajo.',
        responsabilidades: [
          'Diagnostico, mantenimiento y reparacion de impresoras y equipos de computo.',
          'Soporte preventivo y correctivo en hardware, software, sistemas y perifericos.',
          'Instalacion, configuracion y validacion de herramientas tecnologicas de uso diario.',
          'Atencion tecnica a usuarios, seguimiento de incidencias y solucion de problemas en campo.'
        ],
        logros: [
          'Fortalecimiento de la disponibilidad de equipos mediante mantenimiento preventivo.',
          'Solucion de fallas recurrentes en impresoras, computadores y configuraciones de sistema.',
          'Acompanamiento tecnico cercano a usuarios para recuperar continuidad operativa.'
        ],
        aptitudes: ['Soporte TI', 'Impresoras', 'Equipos de computo', 'Hardware y software', 'Configuracion de sistemas']
      },
      {
        cargo: 'Empleado en practicas',
        empresa: 'Comercializadora Internacional de Llantas S.A.S.',
        periodo: 'Abr. 2022 - Oct. 2022',
        ubicacion: 'Valledupar, Cesar, Colombia',
        descripcion: 'Practica tecnica en servicios automotrices, mantenimiento y apoyo operativo, aplicando bases de diagnostico, orden de trabajo y responsabilidad tecnica.',
        responsabilidades: [
          'Apoyo en servicios tecnicos automotrices y actividades de mantenimiento.',
          'Revision de condiciones de equipos, herramientas y procesos operativos.',
          'Aplicacion de conocimientos de mecatronica en un entorno real de trabajo.'
        ],
        logros: [
          'Desarrollo de disciplina tecnica, seguimiento de procesos y criterio para diagnostico.',
          'Experiencia practica en mantenimiento y atencion de necesidades operativas.'
        ],
        aptitudes: ['Servicios tecnicos', 'Mantenimiento', 'Diagnostico', 'Trabajo operativo']
      }
    ]
  }

  ngOnInit(): void {
  }
}
