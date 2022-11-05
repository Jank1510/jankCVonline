import { Component } from '@angular/core';
import { ServiceService } from './servicios/service.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jankCVonline';


  constructor(private service: ServiceService) {
    setTimeout(() => {//esat funcion es para q cargen los datos y no marque undefined
      //enviamos todos los datos al servicio para compartirlos con otros componentes
      this.service.setPositionY(this.posicionElemento('app-inicio'), this.posicionElemento('app-educacion'),
        this.posicionElemento('app-portafoli'), this.posicionElemento('app-habilidades'),
        this.posicionElemento('app-resumen'), this.posicionElemento('app-contactame'))
    }, 10);

  } 
  RecargarValoresDeElementos(event:any){//esta funcion recarga la posicion de los elementos para no tener errores mientras de hace zoom en la pagina
    this.service.setPositionY(this.posicionElemento('app-inicio'), this.posicionElemento('app-educacion'),
    this.posicionElemento('app-portafoli'), this.posicionElemento('app-habilidades'),
    this.posicionElemento('app-resumen'), this.posicionElemento('app-contactame'))
  }
  posicionElemento(idElemento: string): any {//retorna el alto de una seccion
    return document.getElementById(idElemento)?.clientHeight
  }
  //codigo para inicia la libreria aos de animaciones
  ngOnInit(){
    AOS.init()
    window.addEventListener('load',AOS.refresh)

  }
}
