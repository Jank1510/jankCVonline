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
        cargo: 'Soporte TI y mantenimiento tecnológico',
        empresa: 'Multitintas INK',
        periodo: 'Abr. 2025 - actualidad',
        ubicacion: 'Bucaramanga, Santander, Colombia - Presencial',
        descripcion: 'Rol enfocado en soporte técnico operativo, mantenimiento de impresoras y computadores, diagnóstico de fallas de hardware/software y configuración de sistemas para usuarios y equipos de trabajo.',
        responsabilidades: [
          'Diagnóstico, mantenimiento y reparación de impresoras y equipos de cómputo.',
          'Soporte preventivo y correctivo en hardware, software, sistemas y periféricos.',
          'Instalación, configuración y validación de herramientas tecnológicas de uso diario.',
          'Atención técnica a usuarios, seguimiento de incidencias y solución de problemas en campo.'
        ],
        logros: [
          'Fortalecimiento de la disponibilidad de equipos mediante mantenimiento preventivo.',
          'Solución de fallas recurrentes en impresoras, computadores y configuraciones de sistema.',
          'Acompañamiento técnico cercano a usuarios para recuperar continuidad operativa.'
        ],
        aptitudes: ['Soporte TI', 'Impresoras', 'Equipos de cómputo', 'Hardware y software', 'Configuración de sistemas']
      },
      {
        cargo: 'Empleado en prácticas',
        empresa: 'Comercializadora Internacional de Llantas S.A.S.',
        periodo: 'Abr. 2022 - Oct. 2022',
        ubicacion: 'Valledupar, Cesar, Colombia',
        descripcion: 'Práctica técnica en servicios automotrices, mantenimiento y apoyo operativo, aplicando bases de diagnóstico, orden de trabajo y responsabilidad técnica.',
        responsabilidades: [
          'Apoyo en servicios técnicos automotrices y actividades de mantenimiento.',
          'Revisión de condiciones de equipos, herramientas y procesos operativos.',
          'Aplicación de conocimientos de mecatrónica en un entorno real de trabajo.'
        ],
        logros: [
          'Desarrollo de disciplina técnica, seguimiento de procesos y criterio para diagnóstico.',
          'Experiencia práctica en mantenimiento y atención de necesidades operativas.'
        ],
        aptitudes: ['Servicios técnicos', 'Mantenimiento', 'Diagnóstico', 'Trabajo operativo']
      }
    ]
  }

  ngOnInit(): void {
  }
}
