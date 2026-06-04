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
        titulo: 'Ingenieria en sistemas',
        lugar: 'Universidad Nacional Abierta y a Distancia - UNAD Colombia',
        imagen: './assets/education-logos/unad.svg',
        periodo: 'Jul. 2025 - Jun. 2030',
        descripcion: 'Formacion orientada a programacion, infraestructura tecnologica, soporte TI y desarrollo de soluciones informaticas. Experiencia practica en hardware, software y mantenimiento tecnologico.',
        aptitudes: ['Soporte tecnico', 'Desarrollo web', 'Automatizacion', 'Tecnologia de la informacion'],
        estado: 'En progreso',
        design: { 'grid-area': '1/1' },
        linea: { right: '-5vw' }
      },
      {
        titulo: 'Tecnico en programacion con enfasis en desarrollo web',
        lugar: 'Universidad Autonoma de Bucaramanga - UNAB',
        imagen: './assets/education-logos/unab.svg',
        periodo: 'May. 2021 - Dic. 2021',
        descripcion: 'Certificado tecnico laboral en habilidades de programacion con enfasis en aplicaciones web.',
        aptitudes: ['Web Development', 'JavaScript', 'Aplicaciones web'],
        linkPreview: certificateDownload('1azE_1-bS-DaQ-6vil9r52fwF1UNsvUdl'),
        linkLabel: 'Descargar certificado',
        design: { 'grid-area': '2/2' },
        linea: { left: '-5vw' }
      },
      {
        titulo: 'Tecnologia en mantenimiento mecatronico de equipos de automotores',
        lugar: 'Servicio Nacional de Aprendizaje - SENA',
        imagen: './assets/education-logos/sena.svg',
        periodo: 'Jun. 2019 - Oct. 2022',
        descripcion: 'Formacion como tecnologo en mantenimiento mecatronico de equipos de automotores.',
        aptitudes: ['Mantenimiento', 'Diagnostico', 'Mecatronica', 'Servicios tecnicos'],
        linkPreview: certificateDownload('18lWY-DVDox8ynRGUMR08NSWAIpbb0cLM'),
        linkLabel: 'Descargar certificado',
        design: { 'grid-area': '3/1' },
        linea: { right: '-5vw' }
      },
      {
        titulo: 'Tecnico en mantenimiento de equipos de computo',
        lugar: 'Servicio Nacional de Aprendizaje - SENA',
        imagen: './assets/education-logos/sena.svg',
        periodo: 'Nov. 2018',
        descripcion: 'Titulo de formacion profesional integral como tecnico en mantenimiento de equipos de computo.',
        aptitudes: ['Mantenimiento de computadores', 'Soporte tecnico', 'Diagnostico', 'Hardware'],
        linkPreview: certificateDownload('135ETtmop6lkJDKIwqi64xN-HzKvQspKb'),
        linkLabel: 'Descargar certificado',
        design: { 'grid-area': '4/2' },
        linea: { left: '-5vw' }
      },
      {
        titulo: 'Ofimatica',
        lugar: 'Servicio Nacional de Aprendizaje - SENA',
        imagen: './assets/education-logos/sena.svg',
        periodo: 'Jul. 2017 - 40 horas',
        descripcion: 'Curso de accion de formacion en ofimatica, enfocado en herramientas basicas de productividad digital.',
        aptitudes: ['Ofimatica', 'Herramientas digitales', 'Productividad', 'Software de oficina'],
        linkPreview: certificateDownload('1VTNXXUAEQt_r1QodvcJnb_vWTXZkoX9Z'),
        linkLabel: 'Descargar certificado',
        design: { 'grid-area': '5/1' },
        linea: { right: '-5vw' }
      },
      {
        titulo: 'Conceptualizacion del lenguaje C++',
        lugar: 'Servicio Nacional de Aprendizaje - SENA',
        imagen: './assets/education-logos/sena.svg',
        periodo: 'Formacion complementaria',
        descripcion: 'Curso orientado a fundamentos del lenguaje C++, logica de programacion, sintaxis y estructuras basicas.',
        aptitudes: ['C++', 'Programacion', 'Logica de programacion', 'Fundamentos'],
        linkPreview: certificateDownload('10QwOIKKgPjtEa3HdOjsRZwzYMidITDiR'),
        linkLabel: 'Descargar certificado',
        design: { 'grid-area': '6/2' },
        linea: { left: '-5vw' }
      },
      {
        titulo: 'Fundamentos de Angular',
        lugar: 'Udemy',
        imagen: './assets/education-logos/udemy.svg',
        periodo: 'Formacion complementaria',
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
