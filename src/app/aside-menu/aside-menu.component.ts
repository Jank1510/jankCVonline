import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../servicios/service.service';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.css']
})
export class AsideMenuComponent implements OnInit {
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
  constructor(private service: ServiceService) {
    this.width = window.innerWidth//cargamos una variable para condicionar las vistas de design en el dom
    this.menuVisible = false
    this.colorGlobal = '#ff3936'
    this.ancho='0'
    setTimeout(() => {
      this.scroll()
    }, 10)
    //para q carge la animacion inicial, ya q ahora son por la funcion scroll no por los click
  }

  ngOnInit(): void {
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
    this.inicioY = this.service.getinicioY()
    this.especialidadY = this.service.getespecialidadY()
    this.educaciony = this.service.geteducacionY()
    this.experienciaY = this.service.getexperienciaY()
    this.portafolioY = this.service.getportafolioY()
    this.habilidadesY = this.service.gethabilidadesY()
    this.resumenY = this.service.getresumenY()
    this.contactameY = this.service.getcontactameY()
  }

  scroll() {//esta funcion identifica donde esta el foco central de la pagina para animar la navegacion
    const ubicacionCentral = (window.innerHeight / 3) + window.scrollY //esta formula calcula el centro de la pantalla para que sea mas dinamico

    this.cararPosicionYDeLosElementos()
    if (ubicacionCentral <= this.inicioY) {
      this.inicio()
    } else if (ubicacionCentral <= this.inicioY + this.especialidadY + 1) {
      this.especialidad()
    } else if (ubicacionCentral <= this.inicioY + this.especialidadY + this.educaciony + 2) {
      this.educacion()
    } else if ((ubicacionCentral <= this.inicioY + this.especialidadY + this.educaciony + this.experienciaY + 3)) {
      this.experiencia()
    } else if ((ubicacionCentral <= this.inicioY + this.especialidadY + this.educaciony + this.experienciaY + this.portafolioY + 4)) {
      this.portafolio()
    } else if ((ubicacionCentral <= this.inicioY + this.especialidadY + this.educaciony + this.experienciaY + this.portafolioY + this.habilidadesY + 5)) {
      this.habilidades()
    } else if ((ubicacionCentral <= this.inicioY + this.especialidadY + this.educaciony + this.experienciaY + this.portafolioY + this.habilidadesY + this.resumenY + 6)) {
      this.resumen()
    } else if ((ubicacionCentral <= this.inicioY + this.especialidadY + this.educaciony + this.experienciaY + this.portafolioY + this.habilidadesY + this.resumenY + this.contactameY + 7)) {
      this.contactame()
    }
  }
  /*funciones de navegacion*/
  inicio(): void {
    this.li_diseno1 = { 'border-bottom-right-radius': '2vw' }
    this.li_especialidad = { 'border-top-right-radius': '2vw' }
    this.li_inicio = { 'color': 'black', 'background': 'white', 'border-radius': '2vw' }
    this.li_educacion = {}
    this.li_habilidades = {}
    this.li_portafolio = {}
    this.li_experiencia = {}
    this.li_resumen = {}
    this.li_diseno2 = {}
    this.li_contactame = {}
    this.imgInicio = 'invert(0) opacity(80%)'
    this.imgEspecialidad = ''
    this.imgEducacion = ''
    this.imgPortafolio = ''
    this.imgExperiencia = ''
    this.imgHabilidades = ''
    this.imgResumen = ''
    this.imgContactame = ''
  }
  especialidad(): void {
    this.li_inicio = { 'border-bottom-right-radius': '2vw' }
    this.li_educacion = { 'border-top-right-radius': '2vw' }
    this.li_especialidad = { 'color': 'black', 'background': 'white', 'border-radius': '2vw' }
    this.li_diseno1 = {}
    this.li_resumen = {}
    this.li_habilidades = {}
    this.li_portafolio = {}
    this.li_experiencia = {}
    this.li_diseno2 = {}
    this.li_contactame = {}
    this.imgInicio = ''
    this.imgEspecialidad = 'invert(0) opacity(80%)'
    this.imgEducacion = ''
    this.imgPortafolio = ''
    this.imgExperiencia = ''
    this.imgHabilidades = ''
    this.imgResumen = ''
    this.imgContactame = ''
  }
  educacion(): void {
    this.li_especialidad = { 'border-bottom-right-radius': '2vw' }
    this.li_experiencia = { 'border-top-right-radius': '2vw' }
    this.li_educacion = { 'color': 'black', 'background': 'white', 'border-radius': '2vw' }
    this.li_inicio = {}
    this.li_diseno1 = {}
    this.li_resumen = {}
    this.li_habilidades = {}
    this.li_portafolio = {}
    this.li_diseno2 = {}
    this.li_contactame = {}
    this.imgInicio = ''
    this.imgEspecialidad = ''
    this.imgEducacion = 'invert(0) opacity(80%)'
    this.imgPortafolio = ''
    this.imgExperiencia = ''
    this.imgHabilidades = ''
    this.imgResumen = ''
    this.imgContactame = ''
  }
  experiencia(): void {
    this.li_educacion = { 'border-bottom-right-radius': '2vw' }
    this.li_portafolio = { 'border-top-right-radius': '2vw' }
    this.li_experiencia = { 'color': 'black', 'background': 'white', 'border-radius': '2vw' }
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
    this.imgExperiencia = 'invert(0) opacity(80%)'
    this.imgPortafolio = ''
    this.imgHabilidades = ''
    this.imgResumen = ''
    this.imgContactame = ''
  }
  portafolio(): void {
    this.li_experiencia = { 'border-bottom-right-radius': '2vw' }
    this.li_habilidades = { 'border-top-right-radius': '2vw' }
    this.li_portafolio = { 'color': 'black', 'background': 'white', 'border-radius': '2vw' }
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
    this.imgPortafolio = 'invert(0) opacity(80%)'
    this.imgHabilidades = ''
    this.imgResumen = ''
    this.imgContactame = ''
  }
  habilidades(): void {
    this.li_portafolio = { 'border-bottom-right-radius': '2vw' }
    this.li_resumen = { 'border-top-right-radius': '2vw' }
    this.li_habilidades = { 'color': 'black', 'background': 'white', 'border-radius': '2vw' }
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
    this.imgHabilidades = 'invert(0) opacity(80%)'
    this.imgResumen = ''
    this.imgContactame = ''
  }
  resumen(): void {
    this.li_habilidades = { 'border-bottom-right-radius': '2vw' }
    this.li_contactame = { 'border-top-right-radius': '2vw' }
    this.li_resumen = { 'color': 'black', 'background': 'white', 'border-radius': '2vw' }
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
    this.imgResumen = 'invert(0) opacity(80%)'
    this.imgContactame = ''
  }
  contactame(): void {
    this.li_resumen = { 'border-bottom-right-radius': '2vw' }
    this.li_diseno2 = { 'border-top-right-radius': '2vw' }
    this.li_contactame = { 'color': 'black', 'background': 'white', 'border-radius': '2vw' }
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
    this.imgContactame = 'invert(0) opacity(80%)'
  }
}
