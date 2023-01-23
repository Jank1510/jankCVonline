import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  obecjtEstudios: any

  constructor() {
    this.obecjtEstudios = [{
      titulo: "Programación con énfasis en aplicaciones web",
      lugar: "Universidad Autónoma de Bucaramanga-UNAB",
      imagen: "https://misiontic2022.unab.edu.co/pluginfile.php/1/theme_academi/logo/-1/LogoUnab-Horizontal.png",
      linkPreview: "https://drive.google.com/file/d/1azE_1-bS-DaQ-6vil9r52fwF1UNsvUdl/view?usp=sharing",
      design: {'grid-area':'1/1'},
      linea:{'right': '-5vw'}
    }, {
      titulo: "FrontEnd web developer",
      lugar: "Udemy",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png",
      linkPreview: "https://drive.google.com/file/d/1BbXKR59XBOciVRnL01dV5xOUyZ7ndEOe/view?usp=share_link", 
      design: {'grid-area':'2/2'},
      linea:{'left': '-5vw'}
      

    }, {
      titulo: "HTML desde cero hasta experto",
      lugar: "Udemy",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png",
      linkPreview: "https://drive.google.com/file/d/1YPb7faXiYtSzN8uX0Byn67KdOKFNUUgA/view?usp=sharing",
      design: {'grid-area':'3/1'},
      linea:{'right': '-5vw'}



    }, {
      titulo: "Fundamentos de Angular",
      lugar: "Udemy",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png",
      linkPreview: "https://drive.google.com/file/d/14S9mXm02HYprRqjtF2SUO4MBrRYkuwvB/view",
      design: {'grid-area':'4/2'},

      linea:{'left': '-5vw'}

    }
    ]
  }

  ngOnInit(): void {
  }
}
