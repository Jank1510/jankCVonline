import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  inicioY = 0
  especialidadY = 0
  educacionY = 0
  experienciaY = 0
  portafolioY = 0
  habilidadesY = 0
  resumenY = 0
  contactameY = 0

  constructor() {
  }

  setPositionY(inicio: number, especialidad: number, educacion: number, experiencia: number, portafolio: number, habilidades: number, resumen: number, contactame: number): void {
    this.inicioY = inicio
    this.especialidadY = especialidad
    this.educacionY = educacion
    this.experienciaY = experiencia
    this.portafolioY = portafolio
    this.habilidadesY = habilidades
    this.resumenY = resumen
    this.contactameY = contactame
  }

  getinicioY(): number {
    return this.inicioY
  }

  geteducacionY(): number {
    return this.educacionY
  }

  getespecialidadY(): number {
    return this.especialidadY
  }

  getexperienciaY(): number {
    return this.experienciaY
  }

  getportafolioY(): number {
    return this.portafolioY
  }

  gethabilidadesY(): number {
    return this.habilidadesY
  }

  getresumenY(): number {
    return this.resumenY
  }

  getcontactameY(): number {
    return this.contactameY
  }
}
