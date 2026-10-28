import { Component, OnInit } from '@angular/core';

export interface ServiceItem {
  titulo: string;
  etiqueta: string;
  descripcion: string;
  imagen: string;
  capacidades: string[];
  enlaceCotizacion: string;
}

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
  servicios: ServiceItem[];
  experiencias: ExperienceItem[];

  constructor() {
    this.servicios = [
      {
        titulo: 'Mantenimiento de computadores',
        etiqueta: 'Soporte Hardware & Software',
        descripcion: 'Diagnóstico técnico, mantenimiento preventivo y correctivo, optimización de velocidad, formateo e instalación de sistemas para laptops y equipos de escritorio.',
        imagen: './assets/img/trabajos/servicio-tecnico-computadores.png',
        capacidades: [
          'Diagnóstico de hardware y software',
          'Mantenimiento preventivo / correctivo',
          'Optimización de rendimiento',
          'Formateo e instalación de sistemas',
          'Laptops y PCs de alto rendimiento'
        ],
        enlaceCotizacion: 'https://wa.me/JankosTech?text=Hola%20JANKOS%20Tech,%20deseo%20cotizar%20mantenimiento%20de%20computadores'
      },
      {
        titulo: 'Mantenimiento de impresoras',
        etiqueta: 'Soporte Especializado',
        descripcion: 'Diagnóstico integral, desobstrucción y limpieza profunda de cabezales, calibración mecánica, solución de fallas y mantenimiento de sistemas continuos y térmicos.',
        imagen: './assets/img/trabajos/servicio-tecnico-impresora-epson.png',
        capacidades: [
          'Diagnóstico y solución de fallas',
          'Limpieza y desobstrucción de cabezales',
          'Sistemas continuos y recargas',
          'Módulos térmicos y calibración mecánica',
          'Mantenimiento preventivo para oficinas'
        ],
        enlaceCotizacion: 'https://wa.me/JankosTech?text=Hola%20JANKOS%20Tech,%20deseo%20cotizar%20mantenimiento%20de%20impresoras'
      }
    ];

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
