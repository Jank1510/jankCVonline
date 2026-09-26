import { Component, OnInit } from '@angular/core';

interface FocusItem {
  titulo: string;
  descripcion: string;
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
        descripcion: 'Diagnóstico, desobstrucción de cabezales, sistemas continuos, módulos térmicos y calibración mecánica.'
      },
      {
        titulo: 'Soporte Cómputo e Infraestructura TI',
        descripcion: 'Optimización, mantenimiento preventivo/correctivo de laptops y PCs de alto rendimiento, configuración de entornos y servidores.'
      },
      {
        titulo: 'Impresión 3D y Fabricación Digital',
        descripcion: 'Prototipado funcional, producción de piezas mecánicas/personalizadas y asesoría técnica en corte/slicing.'
      }
    ];
  }

  ngOnInit(): void {
  }
}
