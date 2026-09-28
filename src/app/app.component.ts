import { Component, OnInit, ElementRef, ViewChild, NgZone, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ServiceService } from './servicios/service.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('canvasTecnologico') canvasRef!: ElementRef;
  
  title = 'Jehan Hurtado | Soporte técnico, impresoras e impresión 3D';
  nameAnimatin = ''
  displayanimatin = 'block'
  iconosFlotantes: any[] = [];

  constructor(private service: ServiceService, private ngZone: NgZone) {
    setTimeout(() => {
      this.loadSectionHeights()
    }, 10);

    setTimeout(() => {
      this.nameAnimatin = 'animatinoLoader'
      setTimeout(() => {
        this.displayanimatin = 'none'
      }, 650);
    }, 700);
  }

  RecargarValoresDeElementos(event: Event): void {
    this.loadSectionHeights()
  }

  posicionElemento(idElemento: string): number {
    return document.getElementById(idElemento)?.clientHeight ?? 0
  }

  ngOnInit(): void {
    AOS.init()
    window.addEventListener('load', AOS.refresh)

    const paths = [
      'M7,21H5V19H3V17H5V13H3V11H5V7H3V5H5V3H7V5H11V3H13V5H17V3H19V5H21V7H19V11H21V13H19V17H21V19H19V21H17V19H13V21H11V19H7V21M7,19H17V17H19V7H17V5H7V7H5V17H7V19M9,15H15V9H9V15M11,13H13V11H11V13Z', // Microcontroller
      'M4,3H20A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H4A2,2 0 0,1 2,8V5A2,2 0 0,1 4,3M4,5V8H20V5H4M4,14H20A2,2 0 0,1 22,16V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V16A2,2 0 0,1 4,14M4,16V19H20V16H4M7,6A1,1 0 0,0 6,7A1,1 0 0,0 7,8A1,1 0 0,0 8,7A1,1 0 0,0 7,6M10,6A1,1 0 0,0 9,7A1,1 0 0,0 10,8A1,1 0 0,0 11,7A1,1 0 0,0 10,6M7,17A1,1 0 0,0 6,18A1,1 0 0,0 7,19A1,1 0 0,0 8,18A1,1 0 0,0 7,17M10,17A1,1 0 0,0 9,18A1,1 0 0,0 10,19A1,1 0 0,0 11,18A1,1 0 0,0 10,17Z', // Server Rack
      'M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6Z', // Code
      'M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.98C19.47,12.66 19.5,12.34 19.5,12C19.5,11.66 19.47,11.34 19.43,11.02L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.65 15.48,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.52,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11.02C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.98L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.52,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.48,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.98Z', // Gears
      'M12,2L2,22H22L12,2M12,5.8L18.4,19H5.6L12,5.8M12,9L8,17H16L12,9Z', // NERV abstract
      'M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19M17,17H7V15H17V17M13,13H11V7H13V13M15,9H9V11H15V9Z' // 3D Printer
    ];

    const colores = ['#00f2fe', '#4facfe', '#f093fb', '#f5576c', '#43e97b', '#38f9d7', '#fa709a', '#fee140'];

    for (let i = 0; i < 100; i++) {
      const randPath = paths[Math.floor(Math.random() * paths.length)];
      const randTop = (Math.random() * 350 - 10) + '%';
      const randLeft = Math.floor(Math.random() * 90) + 5 + '%';
      const randDelay = -(Math.random() * 15) + 's';
      const randRotation = `rotate(${Math.floor(Math.random() * 360)}deg)`;
      const randColor = colores[Math.floor(Math.random() * colores.length)];

      this.iconosFlotantes.push({
        path: randPath,
        top: randTop,
        left: randLeft,
        delay: randDelay,
        rotation: randRotation,
        color: randColor
      });
    }
  }

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(window, 'scroll').subscribe(() => {
        if (this.canvasRef) {
          const parallaxValue = window.scrollY * 0.25;
          this.canvasRef.nativeElement.style.setProperty('--parallax-y', `-${parallaxValue}px`);
        }
      });
    });
  }

  private loadSectionHeights(): void {
    this.service.setPositionY(
      this.posicionElemento('app-inicio'),
      this.posicionElemento('app-especialidad'),
      this.posicionElemento('app-educacion'),
      this.posicionElemento('app-experiencia'),
      this.posicionElemento('app-portafoli'),
      this.posicionElemento('app-habilidades'),
      this.posicionElemento('app-resumen'),
      this.posicionElemento('app-contactame')
    )
  }
}
