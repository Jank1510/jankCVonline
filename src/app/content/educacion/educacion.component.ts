import { Component, OnInit } from '@angular/core';

export interface EducationItem {
  titulo: string;
  institucion: string;
  periodo: string;
  estado?: string;
  detalle: string;
}

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  formacionAcademica: EducationItem[];
  cursosCertificaciones: EducationItem[];

  constructor() {
    this.formacionAcademica = [
      {
        titulo: 'Ingeniería en Sistemas',
        institucion: 'UNAD Colombia',
        periodo: '2025 - 2030',
        estado: 'En progreso',
        detalle: 'UNAD Colombia | En progreso (2025 - 2030)'
      },
      {
        titulo: 'Tecnólogo en Mecatrónica',
        institucion: 'SENA',
        periodo: 'Jun. 2019 - Oct. 2022',
        estado: 'Titulado',
        detalle: 'SENA | Jun. 2019 - Oct. 2022'
      },
      {
        titulo: 'Técnico en Programación Web',
        institucion: 'UNAB',
        periodo: 'May. 2021 - Dic. 2021',
        estado: 'Certificado',
        detalle: 'UNAB | May. 2021 - Dic. 2021'
      },
      {
        titulo: 'Técnico en Mantenimiento de Equipos de Cómputo',
        institucion: 'SENA',
        periodo: 'Nov. 2018',
        estado: 'Titulado',
        detalle: 'SENA | Nov. 2018'
      }
    ];

    this.cursosCertificaciones = [
      {
        titulo: 'Conceptualización del Lenguaje C++',
        institucion: 'SENA',
        periodo: 'Formación complementaria',
        detalle: 'SENA | Formación complementaria'
      },
      {
        titulo: 'Fundamentos de Angular',
        institucion: 'Udemy',
        periodo: 'Formación complementaria',
        detalle: 'Udemy | Formación complementaria'
      },
      {
        titulo: 'Ofimática',
        institucion: 'SENA',
        periodo: 'Jul. 2017 (40 horas)',
        detalle: 'SENA | Jul. 2017 (40 horas)'
      }
    ];
  }

  ngOnInit(): void {
  }
}
