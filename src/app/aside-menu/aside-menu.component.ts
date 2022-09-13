import { Component, OnInit } from '@angular/core';

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
  li_educacion!: object
  li_portafolio!: object
  li_habilidades!: object
  li_resumen!: object
  li_contactame!: object
  li_diseno2!: object
  imgInicio!:string
  imgEducacion!:string
  imgPortafolio!:string
  imgHabilidades!:string
  imgResumen!:string
  imgContactame!:string


  constructor() {
    this.colorGlobal = 'rgb(86, 130, 129)'
  }

  ngOnInit(): void {
  }
  /*funciones de navegacion*/
  inicio(): void {
    this.li_diseno1 = { 'border-bottom-right-radius': '2rem' }
    this.li_educacion = { 'border-top-right-radius': '2rem' }
    this.li_inicio = { 'color': 'rgb(47, 62, 68)', 'background': 'white', 'border-radius': '2rem' }
    this.li_habilidades = {}
    this.li_portafolio = {}
    this.li_resumen = {}
    this.li_diseno2 = {}
    this.li_contactame = {}
    this.imgInicio='invert(0) opacity(80%)'
    this.imgEducacion=''
    this.imgPortafolio=''
    this.imgHabilidades=''
    this.imgResumen=''
    this.imgContactame=''
  }
  educacion(): void {
    this.li_inicio = { 'border-bottom-right-radius': '2rem' }
    this.li_portafolio = { 'border-top-right-radius': '2rem' }
    this.li_educacion = { 'color': 'rgb(47, 62, 68)', 'background': 'white', 'border-radius': '2rem' }
    this.li_diseno1 = {}
    this.li_resumen = {}
    this.li_habilidades = {}
    this.li_diseno2 = {}
    this.li_contactame = {}
    this.imgInicio=''
    this.imgEducacion='invert(0) opacity(80%)'
    this.imgPortafolio=''
    this.imgHabilidades=''
    this.imgResumen=''
    this.imgContactame=''
  }
  portafolio(): void {
    this.li_educacion = { 'border-bottom-right-radius': '2rem' }
    this.li_habilidades = { 'border-top-right-radius': '2rem' }
    this.li_portafolio = { 'color': 'rgb(47, 62, 68)', 'background': 'white', 'border-radius': '2rem' }
    this.li_resumen = {}    
    this.li_diseno1 = {}
    this.li_inicio = {}
    this.li_diseno2 = {}
    this.li_contactame = {}
    this.imgInicio=''
    this.imgEducacion=''
    this.imgPortafolio='invert(0) opacity(80%)'
    this.imgHabilidades=''
    this.imgResumen=''
    this.imgContactame=''
  }
  habilidades(): void {
    this.li_portafolio = { 'border-bottom-right-radius': '2rem' }
    this.li_resumen = { 'border-top-right-radius': '2rem' }
    this.li_habilidades = { 'color': 'rgb(47, 62, 68)', 'background': 'white', 'border-radius': '2rem' }
    this.li_diseno1 = {}
    this.li_inicio = {}
    this.li_diseno2 = {}
    this.li_educacion = {}
    this.li_contactame = {}
    this.imgInicio=''
    this.imgEducacion=''
    this.imgPortafolio=''
    this.imgHabilidades='invert(0) opacity(80%)'
    this.imgResumen=''
    this.imgContactame=''
  }
  resumen(): void {
    this.li_habilidades = { 'border-bottom-right-radius': '2rem' }
    this.li_contactame = { 'border-top-right-radius': '2rem' }
    this.li_resumen = { 'color': 'rgb(47, 62, 68)', 'background': 'white', 'border-radius': '2rem' }
    this.li_portafolio = {}    
    this.li_educacion = {}
    this.li_diseno1 = {}
    this.li_inicio = {}
    this.li_diseno2 = {}
    this.imgInicio=''
    this.imgEducacion=''
    this.imgPortafolio=''
    this.imgHabilidades=''
    this.imgResumen='invert(0) opacity(80%)'
    this.imgContactame=''
  }
  contactame(): void {
    this.li_resumen = { 'border-bottom-right-radius': '2rem' }
    this.li_diseno2 = { 'border-top-right-radius': '2rem' }
    this.li_contactame = { 'color': 'rgb(47, 62, 68)', 'background': 'white', 'border-radius': '2rem' }
    this.li_portafolio = {}
    this.li_habilidades = {}
    this.li_educacion = {}
    this.li_diseno1 = {}
    this.li_inicio = {}
    this.imgInicio=''
    this.imgEducacion=''
    this.imgPortafolio=''
    this.imgHabilidades=''
    this.imgResumen=''
    this.imgContactame='invert(0) opacity(80%)'
  }
}
