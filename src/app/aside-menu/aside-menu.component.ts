import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { ServiceService } from '../servicios/service.service';
import { fromEvent, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.css']
})
export class AsideMenuComponent implements OnInit, OnDestroy {
  scrollSubscription!: Subscription;
  seccionActual: string = '';
  colorGlobal: string
  /*variables para el control de border radius en el doom*/
  li_diseno1!: object
  li_inicio!: object
  li_especialidad!: object
  li_educacion!: object
  li_experiencia!: object
  li_portafolio!: object
  li_habilidades!: object
  li_resumen!: object
  li_contactame!: object
  li_diseno2!: object
  imgInicio!: string
  imgEspecialidad!: string
  imgEducacion!: string
  imgExperiencia!: string
  imgPortafolio!: string
  imgHabilidades!: string
  imgResumen!: string
  imgContactame!: string
  /* VARIABLES DONDE SECARGAN LA POSICION DE LOS ELEMENTOS DEL APPCOMPONENT que vienen del servicio */
  inicioY!: number
  especialidadY!: number
  educaciony!: number
  experienciaY!: number
  portafolioY!: number
  habilidadesY!: number
  resumenY!: number
  contactameY!: number

  /*responsive design*/
  width: number
  menuVisible: boolean
  directionNameAnimation!:string
  animation!:string
  ancho:string
  constructor(private service: ServiceService, private ngZone: NgZone) {
    this.width = window.innerWidth//cargamos una variable para condicionar las vistas de design en el dom
    this.menuVisible = false
    this.colorGlobal = '#f8f9fa'
    this.ancho='0'
    setTimeout(() => {
      this.detectarSeccionActiva()
    }, 10)
    //para q carge la animacion inicial, ya q ahora son por la funcion scroll no por los click
  }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.scrollSubscription = fromEvent(window, 'scroll')
        .pipe(throttleTime(50))
        .subscribe(() => {
          this.detectarSeccionActiva();
        });
    });
  }

  ngOnDestroy(): void {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }

  detectarSeccionActiva(): void {
    const secciones = document.querySelectorAll('.ancho');
    const puntoMedio = window.innerHeight / 2;

    for (let i = 0; i < secciones.length; i++) {
      const seccion = secciones[i] as HTMLElement;
      const rect = seccion.getBoundingClientRect();
      
      if (rect.top <= puntoMedio && rect.bottom >= puntoMedio) {
        const nuevaSeccion = seccion.id;
        
        if (nuevaSeccion !== this.seccionActual) {
          this.ngZone.run(() => {
            this.seccionActual = nuevaSeccion;
            if (nuevaSeccion === 'app-inicio') this.inicio();
            else if (nuevaSeccion === 'app-especialidad') this.especialidad();
            else if (nuevaSeccion === 'app-educacion') this.educacion();
            else if (nuevaSeccion === 'app-experiencia') this.experiencia();
            else if (nuevaSeccion === 'app-portafoli') this.portafolio();
            else if (nuevaSeccion === 'app-habilidades') this.habilidades();
            else if (nuevaSeccion === 'app-resumen') this.resumen();
            else if (nuevaSeccion === 'app-contactame') this.contactame();
          });
        }
        break;
      }
    }
  }

  ajusteResolucion(event: Event): void {//funcion para actualizar el tamano del ancho en px de la pantalla
    this.width = window.innerWidth
  }

  closedMenu(): void {
      this.directionNameAnimation='asideIpadClosed'
    setTimeout(() => {
      this.menuVisible = false 
    }, 500);
  }

  cararPosicionYDeLosElementos() {//cargamos las variables con el servicio q nos trae los datos del componente app
  }

  scroll() {
    // Obsolete - logic moved to IntersectionObserver
  }
  /*funciones de navegacion*/
  inicio(): void {
    this.li_diseno1 = {}
    this.li_especialidad = {}
    this.li_inicio = { 'background': '#ffffff', 'color': '#111111', 'border-left': '4px solid #111111', 'font-weight': '700' }
    this.li_educacion = {}
    this.li_habilidades = {}
    this.li_portafolio = {}
    this.li_experiencia = {}
    this.li_resumen = {}
    this.li_diseno2 = {}
    this.li_contactame = {}
    this.imgInicio = 'opacity(100%)'
    this.imgEspecialidad = ''
    this.imgEducacion = ''
    this.imgPortafolio = ''
    this.imgExperiencia = ''
    this.imgHabilidades = ''
    this.imgResumen = ''
    this.imgContactame = ''
  }
  especialidad(): void {
    this.li_inicio = {}
    this.li_educacion = {}
    this.li_especialidad = { 'background': '#ffffff', 'color': '#111111', 'border-left': '4px solid #111111', 'font-weight': '700' }
    this.li_diseno1 = {}
    this.li_resumen = {}
    this.li_habilidades = {}
    this.li_portafolio = {}
    this.li_experiencia = {}
    this.li_diseno2 = {}
    this.li_contactame = {}
    this.imgInicio = ''
    this.imgEspecialidad = 'opacity(100%)'
    this.imgEducacion = ''
    this.imgPortafolio = ''
    this.imgExperiencia = ''
    this.imgHabilidades = ''
    this.imgResumen = ''
    this.imgContactame = ''
  }
  educacion(): void {
    this.li_especialidad = {}
    this.li_experiencia = {}
    this.li_educacion = { 'background': '#ffffff', 'color': '#111111', 'border-left': '4px solid #111111', 'font-weight': '700' }
    this.li_inicio = {}
    this.li_diseno1 = {}
    this.li_resumen = {}
    this.li_habilidades = {}
    this.li_portafolio = {}
    this.li_diseno2 = {}
    this.li_contactame = {}
    this.imgInicio = ''
    this.imgEspecialidad = ''
    this.imgEducacion = 'opacity(100%)'
    this.imgPortafolio = ''
    this.imgExperiencia = ''
    this.imgHabilidades = ''
    this.imgResumen = ''
    this.imgContactame = ''
  }
  experiencia(): void {
    this.li_educacion = {}
    this.li_portafolio = {}
    this.li_experiencia = { 'background': '#ffffff', 'color': '#111111', 'border-left': '4px solid #111111', 'font-weight': '700' }
    this.li_resumen = {}
    this.li_diseno1 = {}
    this.li_inicio = {}
    this.li_especialidad = {}
    this.li_habilidades = {}
    this.li_diseno2 = {}
    this.li_contactame = {}
    this.imgInicio = ''
    this.imgEspecialidad = ''
    this.imgEducacion = ''
    this.imgExperiencia = 'opacity(100%)'
    this.imgPortafolio = ''
    this.imgHabilidades = ''
    this.imgResumen = ''
    this.imgContactame = ''
  }
  portafolio(): void {
    this.li_experiencia = {}
    this.li_habilidades = {}
    this.li_portafolio = { 'background': '#ffffff', 'color': '#111111', 'border-left': '4px solid #111111', 'font-weight': '700' }
    this.li_resumen = {}
    this.li_educacion = {}
    this.li_diseno1 = {}
    this.li_inicio = {}
    this.li_especialidad = {}
    this.li_diseno2 = {}
    this.li_contactame = {}
    this.imgInicio = ''
    this.imgEspecialidad = ''
    this.imgEducacion = ''
    this.imgExperiencia = ''
    this.imgPortafolio = 'opacity(100%)'
    this.imgHabilidades = ''
    this.imgResumen = ''
    this.imgContactame = ''
  }
  habilidades(): void {
    this.li_portafolio = {}
    this.li_resumen = {}
    this.li_habilidades = { 'background': '#ffffff', 'color': '#111111', 'border-left': '4px solid #111111', 'font-weight': '700' }
    this.li_diseno1 = {}
    this.li_inicio = {}
    this.li_especialidad = {}
    this.li_diseno2 = {}
    this.li_educacion = {}
    this.li_experiencia = {}
    this.li_contactame = {}
    this.imgInicio = ''
    this.imgEspecialidad = ''
    this.imgEducacion = ''
    this.imgPortafolio = ''
    this.imgExperiencia = ''
    this.imgHabilidades = 'opacity(100%)'
    this.imgResumen = ''
    this.imgContactame = ''
  }
  resumen(): void {
    this.li_habilidades = {}
    this.li_contactame = {}
    this.li_resumen = { 'background': '#ffffff', 'color': '#111111', 'border-left': '4px solid #111111', 'font-weight': '700' }
    this.li_portafolio = {}
    this.li_educacion = {}
    this.li_experiencia = {}
    this.li_diseno1 = {}
    this.li_inicio = {}
    this.li_especialidad = {}
    this.li_diseno2 = {}
    this.imgInicio = ''
    this.imgEspecialidad = ''
    this.imgEducacion = ''
    this.imgPortafolio = ''
    this.imgExperiencia = ''
    this.imgHabilidades = ''
    this.imgResumen = 'opacity(100%)'
    this.imgContactame = ''
  }
  contactame(): void {
    this.li_resumen = {}
    this.li_diseno2 = {}
    this.li_contactame = { 'background': '#ffffff', 'color': '#111111', 'border-left': '4px solid #111111', 'font-weight': '700' }
    this.li_portafolio = {}
    this.li_habilidades = {}
    this.li_educacion = {}
    this.li_experiencia = {}
    this.li_diseno1 = {}
    this.li_inicio = {}
    this.li_especialidad = {}
    this.imgInicio = ''
    this.imgEspecialidad = ''
    this.imgEducacion = ''
    this.imgPortafolio = ''
    this.imgExperiencia = ''
    this.imgHabilidades = ''
    this.imgResumen = ''
    this.imgContactame = 'opacity(100%)'
  }
}
