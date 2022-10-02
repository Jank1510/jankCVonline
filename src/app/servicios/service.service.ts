import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  //nuestro servicio se encarga de almacenar datos que compartiremos de un componente a otro
  inicioY!:number
  educacionY!:number
  portafolioY!:number
  habilidadesY!:number
  resumenY!:number
  contactameY!:number

  constructor() { 
  }
  setPositionY(inicio:number,educacion:number,portafolio:number,habilidades:number,resumen:number,contactame:number){
    this.inicioY=inicio
    this.educacionY=educacion
    this.portafolioY=portafolio
    this.habilidadesY=habilidades
    this.resumenY=resumen
    this.contactameY=contactame
  }
  getinicioY():number{
    return this.inicioY
  }
  geteducacionY():number{
    return this.educacionY
  }
  getportafolioY():number{
    return this.portafolioY
  }
  gethabilidadesY():number{
    return this.habilidadesY
  }
  getresumenY():number{
    return this.resumenY
  }
  getcontactameY():number{
    return this.contactameY
  }
}
