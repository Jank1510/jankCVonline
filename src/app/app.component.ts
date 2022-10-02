import { Component } from '@angular/core';
import { ServiceService } from './servicios/service.service';

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
  posicionElemento(idElemento: string): any {//retorna el alto de una seccion
    return document.getElementById(idElemento)?.clientHeight
  }
}
