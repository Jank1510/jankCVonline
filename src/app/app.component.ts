import { Component } from '@angular/core';
import { ServiceService } from './servicios/service.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jehan Hurtado | Soporte tecnico, impresoras e impresion 3D';
  nameAnimatin = ''
  displayanimatin = 'block'

  constructor(private service: ServiceService) {
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
