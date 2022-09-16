import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  obecjtEstudios: any

  constructor() {
    this.obecjtEstudios =[ { 
    titulo: "Programación con énfasis en aplicaciones web",
    lugar:"Universidad Autónoma de Bucaramanga-UNAB",
    imagen:"https://misiontic2022.unab.edu.co/pluginfile.php/1/theme_academi/logo/-1/LogoUnab-Horizontal.png",
    linkPreview:"https://drive.google.com/file/d/1azE_1-bS-DaQ-6vil9r52fwF1UNsvUdl/view?usp=sharing"

     }, {}]
  }

  ngOnInit(): void {
  }
}
