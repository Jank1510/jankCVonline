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
