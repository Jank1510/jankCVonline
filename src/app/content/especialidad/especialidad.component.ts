import { Component, OnInit } from '@angular/core';

interface FocusItem {
  titulo: string;
  descripcion: string;
  imagen: string;
  capacidades: string[];
}

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent implements OnInit {
  servicios: FocusItem[];

  constructor() {
    this.servicios = [
      {
        titulo: 'Mantenimiento y Reparación de Impresoras',
        descripcion: 'Servicio técnico especializado para alargar la vida útil de equipos de impresión.',
        imagen: './assets/img/trabajos/servicio-tecnico-impresora-epson.png',
        capacidades: [
          'Diagnóstico',
          'Desobstrucción de cabezales',
          'Sistemas continuos',
          'Módulos térmicos',
          'Calibración mecánica'
        ]
      },
      {
        titulo: 'Soporte Cómputo e Infraestructura TI',
        descripcion: 'Soluciones informáticas para garantizar el máximo rendimiento de equipos.',
        imagen: './assets/img/trabajos/servicio-tecnico-computadores.png',
        capacidades: [
          'Optimización',
          'Mantenimiento preventivo/correctivo',
          'Laptops y PCs de alto rendimiento',
          'Configuración de entornos/servidores'
        ]
      }
    ];
  }

  ngOnInit(): void {
  }
}
