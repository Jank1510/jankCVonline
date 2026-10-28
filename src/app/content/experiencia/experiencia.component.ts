import { Component, OnInit } from '@angular/core';

export interface ExperienceItem {
  cargo: string;
  empresa: string;
  periodo: string;
  ubicacion: string;
  descripcionCorta: string;
  funcionesClave: string[];
  logros: string[];
  aptitudes: string[];
}

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: ExperienceItem[];

  constructor() {
    this.experiencias = [
      {
        cargo: 'Soporte TI y mantenimiento tecnológico',
        empresa: 'Multitintas INK',
        periodo: 'Abr. 2025 - actualidad',
        ubicacion: 'Bucaramanga, Santander • Presencial',
        descripcionCorta: 'Soporte técnico operativo, diagnóstico y mantenimiento integral de hardware, software y sistemas.',
        funcionesClave: [
          'Diagnóstico, mantenimiento preventivo y correctivo de impresoras y equipos de cómputo.',
          'Soporte técnico en hardware, software, sistemas operativos y periféricos de trabajo.',
          'Atención técnica directa a usuarios, gestión de incidencias y configuración de herramientas operativas.'
        ],
        logros: [
          'Fortalecimiento de la disponibilidad operativa mediante planes de mantenimiento preventivo.',
          'Resolución de fallas recurrentes en impresoras, computadores y configuraciones de sistema.',
          'Acompañamiento técnico continuo para asegurar la continuidad operativa de los usuarios.'
        ],
        aptitudes: ['Soporte TI', 'Impresoras', 'Equipos de cómputo', 'Hardware y software', 'Configuración de sistemas']
      },
      {
        cargo: 'Empleado en prácticas',
        empresa: 'Comercializadora Internacional de Llantas S.A.S.',
        periodo: 'Abr. 2022 - Oct. 2022',
        ubicacion: 'Valledupar, Cesar',
        descripcionCorta: 'Práctica técnica en servicios automotrices y mantenimiento operativo aplicando bases de mecatrónica.',
        funcionesClave: [
          'Apoyo en servicios técnicos automotrices, diagnóstico y actividades de mantenimiento en taller.',
          'Revisión de condiciones de equipos, control de herramientas y seguimiento de procesos operativos.'
        ],
        logros: [
          'Desarrollo de disciplina técnica, seguimiento riguroso de procesos y criterio para diagnóstico.',
          'Experiencia práctica en atención de necesidades operativas en entorno de trabajo real.'
        ],
        aptitudes: ['Servicios técnicos', 'Mantenimiento', 'Diagnóstico', 'Trabajo operativo']
      }
    ];
  }

  ngOnInit(): void {
  }
}
