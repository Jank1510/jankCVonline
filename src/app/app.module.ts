import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { InicioComponent } from './content/inicio/inicio.component';
import { EducacionComponent } from './content/educacion/educacion.component';
import { PortafolioComponent } from './content/portafolio/portafolio.component';
import { HabilidadesComponent } from './content/habilidades/habilidades.component';
import { ResumenComponent } from './content/resumen/resumen.component';
import { ContactameComponent } from './content/contactame/contactame.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideMenuComponent,
    InicioComponent,
    EducacionComponent,
    PortafolioComponent,
    HabilidadesComponent,
    ResumenComponent,
    ContactameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
