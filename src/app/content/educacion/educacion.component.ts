import { Component, OnInit } from '@angular/core';

interface EducationItem {
  titulo: string
  lugar: string
  imagen: string
  periodo: string
  descripcion: string
  aptitudes: string[]
  linkPreview?: string
  linkLabel?: string
  estado?: string
  design: Record<string, string>
  linea: Record<string, string>
}

const certificateDownload = (fileId: string): string => `https://drive.google.com/uc?export=download&id=${fileId}`

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  estudios: EducationItem[]

  constructor() {
    this.estudios = [
      {
        titulo: 'Ingeniería en sistemas',
        lugar: 'Universidad Nacional Abierta y a Distancia - UNAD Colombia',
        imagen: './assets/education-logos/unad.svg',
        periodo: 'Jul. 2025 - Jun. 2030',
        descripcion: 'Formación orientada a programación, infraestructura tecnológica, soporte TI y desarrollo de soluciones informáticas. Experiencia práctica en hardware, software y mantenimiento tecnológico.',
        aptitudes: ['Soporte técnico', 'Desarrollo web', 'Automatización', 'Tecnología de la Información'],
        estado: 'En progreso',
        design: { 'grid-area': '1/1' },
        linea: { right: '-5vw' }
      },
      {
        titulo: 'Técnico en programación con énfasis en desarrollo web',
        lugar: 'Universidad Autónoma de Bucaramanga - UNAB',
        imagen: './assets/education-logos/unab.svg',
        periodo: 'May. 2021 - Dic. 2021',
        descripcion: 'Certificado técnico laboral en habilidades de programación con énfasis en aplicaciones web.',
        aptitudes: ['Web Development', 'JavaScript', 'Aplicaciones web'],
        linkPreview: certificateDownload('1azE_1-bS-DaQ-6vil9r52fwF1UNsvUdl'),
        linkLabel: 'Descargar certificado',
        design: { 'grid-area': '2/2' },
        linea: { left: '-5vw' }
      },
      {
        titulo: 'Tecnología en mantenimiento mecatrónico de equipos de automotores',
        lugar: 'Servicio Nacional de Aprendizaje - SENA',
        imagen: './assets/education-logos/sena.svg',
        periodo: 'Jun. 2019 - Oct. 2022',
        descripcion: 'Formación como tecnólogo en mantenimiento mecatrónico de equipos de automotores.',
        aptitudes: ['Mantenimiento', 'Diagnóstico', 'Mecatrónica', 'Servicios técnicos'],
        linkPreview: certificateDownload('18lWY-DVDox8ynRGUMR08NSWAIpbb0cLM'),
        linkLabel: 'Descargar certificado',
        design: { 'grid-area': '3/1' },
        linea: { right: '-5vw' }
      },
      {
        titulo: 'Técnico en mantenimiento de equipos de cómputo',
        lugar: 'Servicio Nacional de Aprendizaje - SENA',
        imagen: './assets/education-logos/sena.svg',
        periodo: 'Nov. 2018',
        descripcion: 'Título de formación profesional integral como técnico en mantenimiento de equipos de cómputo.',
        aptitudes: ['Mantenimiento de computadores', 'Soporte técnico', 'Diagnóstico', 'Hardware'],
        linkPreview: certificateDownload('135ETtmop6lkJDKIwqi64xN-HzKvQspKb'),
        linkLabel: 'Descargar certificado',
        design: { 'grid-area': '4/2' },
        linea: { left: '-5vw' }
      },
      {
        titulo: 'Ofimática',
        lugar: 'Servicio Nacional de Aprendizaje - SENA',
        imagen: './assets/education-logos/sena.svg',
        periodo: 'Jul. 2017 - 40 horas',
        descripcion: 'Curso de acción de formación en ofimática, enfocado en herramientas básicas de productividad digital.',
        aptitudes: ['Ofimática', 'Herramientas digitales', 'Productividad', 'Software de oficina'],
        linkPreview: certificateDownload('1VTNXXUAEQt_r1QodvcJnb_vWTXZkoX9Z'),
        linkLabel: 'Descargar certificado',
        design: { 'grid-area': '5/1' },
        linea: { right: '-5vw' }
      },
      {
        titulo: 'Conceptualización del lenguaje C++',
        lugar: 'Servicio Nacional de Aprendizaje - SENA',
        imagen: './assets/education-logos/sena.svg',
        periodo: 'Formación complementaria',
        descripcion: 'Curso orientado a fundamentos del lenguaje C++, lógica de programación, sintaxis y estructuras básicas.',
        aptitudes: ['C++', 'Programación', 'Lógica de programación', 'Fundamentos'],
        linkPreview: certificateDownload('10QwOIKKgPjtEa3HdOjsRZwzYMidITDiR'),
        linkLabel: 'Descargar certificado',
        design: { 'grid-area': '6/2' },
        linea: { left: '-5vw' }
      },
      {
        titulo: 'Fundamentos de Angular',
        lugar: 'Udemy',
        imagen: './assets/education-logos/udemy.svg',
        periodo: 'Formación complementaria',
        descripcion: 'Curso orientado a fundamentos de Angular y desarrollo frontend moderno.',
        aptitudes: ['Angular', 'TypeScript', 'Frontend'],
        linkPreview: certificateDownload('14S9mXm02HYprRqjtF2SUO4MBrRYkuwvB'),
        linkLabel: 'Descargar certificado',
        design: { 'grid-area': '7/1' },
        linea: { right: '-5vw' }
      }
    ]
  }

  ngOnInit(): void {
  }
}
