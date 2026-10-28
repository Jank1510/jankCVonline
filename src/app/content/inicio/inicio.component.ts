import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  positionBackground: string

  constructor() { 
    this.positionBackground=''
  }

  ngOnInit(): void {
  }
  mouseMove(event: MouseEvent): void {
    this.positionBackground = `${event.y - event.y / 1.003}px ${event.x - event.x / 1.003}px`
  }

  irASiguienteSeccion(event: Event): void {
    event.preventDefault();
    const siguienteSeccion =
      document.getElementById('app-recorrido') || document.getElementById('app-servicios');
    if (siguienteSeccion) {
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        const root = document.documentElement;
        const scrollBehaviorAnterior = root.style.scrollBehavior;
        root.style.scrollBehavior = 'auto';
        siguienteSeccion.scrollIntoView({ behavior: 'auto', block: 'start' });
        setTimeout(() => {
          root.style.scrollBehavior = scrollBehaviorAnterior;
        }, 50);
      } else {
        siguienteSeccion.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      const targetId = siguienteSeccion.id || 'app-servicios';
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', '#' + targetId);
      }
    }
  }

}
