import { Component, OnInit } from '@angular/core';

interface EducationItem {
  titulo: string;
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
        detalle: 'UNAD Colombia | En progreso (2025 - 2030)'
      },
      {
        titulo: 'Técnico en Mantenimiento Mecatrónico',
        detalle: 'SENA | Jun. 2019 - Oct. 2022'
      },
      {
        titulo: 'Técnico en Mantenimiento de Equipos de Cómputo',
        detalle: 'SENA | Nov. 2018'
      }
    ];

    this.cursosCertificaciones = [
      {
        titulo: 'Técnico en Programación (Desarrollo Web)',
        detalle: 'UNAB | May. 2021 - Dic. 2021'
      },
      {
        titulo: 'Conceptualización del Lenguaje C++',
        detalle: 'SENA | Formación complementaria'
      },
      {
        titulo: 'Fundamentos de Angular',
        detalle: 'Udemy | Formación complementaria'
      },
      {
        titulo: 'Ofimática',
        detalle: 'SENA | Jul. 2017 (40 horas)'
      }
    ];
  }

  ngOnInit(): void {
  }
}
