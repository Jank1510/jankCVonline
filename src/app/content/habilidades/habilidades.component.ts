import { Component, OnInit } from '@angular/core';

interface SkillItem {
  name: string
  porcentaje: string
  color: string
}

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  dataHabilidades: SkillItem[]

  constructor() {
    this.dataHabilidades = [
      {
        name: 'Soporte TI',
        porcentaje: '96%',
        color: '#2d2d2d'
      },
      {
        name: 'Mantenimiento de impresoras',
        porcentaje: '94%',
        color: '#ef7d24'
      },
      {
        name: 'Hardware y software',
        porcentaje: '92%',
        color: '#4b5563'
      },
      {
        name: 'Diagnóstico técnico',
        porcentaje: '90%',
        color: '#0b6daf'
      },
      {
        name: 'Configuración de sistemas',
        porcentaje: '88%',
        color: '#00a2ff'
      },
      {
        name: 'Atención técnica',
        porcentaje: '86%',
        color: '#00b8a9'
      },
      {
        name: 'JavaScript',
        porcentaje: '85%',
        color: '#db9d26'
      },
      {
        name: 'Angular',
        porcentaje: '85%',
        color: '#5a5a5a'
      },
      {
        name: 'TypeScript',
        porcentaje: '80%',
        color: '#3178c6'
      },
      {
        name: 'Git',
        porcentaje: '80%',
        color: '#7a7a7a'
      }
    ]
  }

  ngOnInit(): void {
  }
}
