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
import { ServiceService } from './servicios/service.service';

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
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
