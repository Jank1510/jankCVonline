import { Component, OnInit } from '@angular/core';

interface PortfolioItem {
  titulo: string
  imgFondo: string
  info: string
  preview?: string
  repositorio: string
  background: string
  var: string
}

const previewAsset = (fileName: string): string => `url("./assets/portfolio-screenshots/${fileName}.png")`

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  dataPortafolio: PortfolioItem[][]
  proyectosDestacados: PortfolioItem[]
  numeroDePagina: number
  animationScroll: string
  animandoPortafolio: boolean
  width: number

  constructor() {
    this.animationScroll = ''
    this.animandoPortafolio = false
    this.numeroDePagina = 0
    this.width = window.innerWidth
    const portfolioItems: PortfolioItem[] = [
        {
          titulo: 'Jank OS',
          imgFondo: previewAsset('jank-os'),
          info: 'Proyecto personal de IA: interfaz de chat con acceso privado, memoria local y experiencia conversacional continua.',
          preview: 'https://ia.nas-jankos.com/',
          repositorio: 'https://github.com/Jank1510/jank-os',
          background: '#11100d',
          var: 'none'
        },
        {
          titulo: 'Blog Preview Card',
          imgFondo: previewAsset('blog-preview-card'),
          info: 'Componente frontend responsivo, limpio y fiel a un diseno profesional.',
          preview: 'https://jank1510.github.io/blog-preview-card-main/',
          repositorio: 'https://github.com/Jank1510/blog-preview-card-main',
          background: '#f4c73d',
          var: 'none'
        },
        {
          titulo: 'Amigo Secreto',
          imgFondo: previewAsset('challenger-amigo-secreto'),
          info: 'Aplicacion practica para sorteo de amigos secretos, enfocada en logica, DOM y experiencia sencilla.',
          preview: 'https://jank1510.github.io/Challenger-Amigo-Secreto/',
          repositorio: 'https://github.com/Jank1510/Challenger-Amigo-Secreto',
          background: '#4f6cff',
          var: 'none'
        },
        {
          titulo: 'REST Countries',
          imgFondo: previewAsset('rest-countries'),
          info: 'Pagina interactiva de paises usando REST Countries API.',
          preview: 'https://jank1510.github.io/rest-countries-api/',
          repositorio: 'https://github.com/Jank1510/rest-countries-api',
          background: '#202c37',
          var: 'none'
        },
        {
          titulo: 'Ecommerce Product',
          imgFondo: previewAsset('ecommerce-product'),
          info: 'Pagina principal para exposicion de productos.',
          preview: 'https://jank1510.github.io/ecommerce-product-page-main/',
          repositorio: 'https://github.com/Jank1510/ecommerce-product-page-main',
          background: '#ff6f43',
          var: 'none'
        },
        {
          titulo: 'Space Tourism',
          imgFondo: previewAsset('space-tourism'),
          info: 'Sitio web de turismo espacial multipagina con datos desde JSON.',
          preview: 'https://jank1510.github.io/space-tourism-website/',
          repositorio: 'https://github.com/Jank1510/space-tourism-website',
          background: '#26486d',
          var: 'none'
        },
        {
          titulo: 'Comments Section',
          imgFondo: previewAsset('comments-section'),
          info: 'Seccion de comentarios dinamica y responsiva.',
          preview: 'https://jank1510.github.io/interactive-comments-section/',
          repositorio: 'https://github.com/Jank1510/interactive-comments-section',
          background: '#5457b6',
          var: 'none'
        },
        {
          titulo: 'Rock Paper Scissors',
          imgFondo: previewAsset('rock-paper-scissors'),
          info: 'Juego de piedra, papel o tijera.',
          preview: 'https://jank1510.github.io/rock-paper-scissors-master/',
          repositorio: 'https://github.com/Jank1510/rock-paper-scissors-master',
          background: '#eca51b',
          var: 'none'
        },
        {
          titulo: 'Calculator App',
          imgFondo: previewAsset('calculator'),
          info: 'Calculadora online con temas integrados.',
          preview: 'https://jank1510.github.io/Calculator-app/',
          repositorio: 'https://github.com/Jank1510/Calculator-app',
          background: '#394764',
          var: 'none'
        },
        {
          titulo: 'Room Homepage',
          imgFondo: previewAsset('room-homepage'),
          info: 'Landing de negocio para habitaciones modernas.',
          preview: 'https://jank1510.github.io/room-homepage/',
          repositorio: 'https://github.com/Jank1510/room-homepage',
          background: '#bbbcc1',
          var: 'none'
        },
        {
          titulo: 'Social Dashboard',
          imgFondo: previewAsset('social-dashboard'),
          info: 'Tablero de redes sociales con cambio de tema.',
          preview: 'https://jank1510.github.io/social-media-dashboard-with-theme-switcher-master/',
          repositorio: 'https://github.com/Jank1510/social-media-dashboard-with-theme-switcher-master',
          background: '#333a56',
          var: 'none'
        },
        {
          titulo: 'Profile Card',
          imgFondo: previewAsset('profile-card'),
          info: 'Tarjeta de perfil personal de red social.',
          preview: 'https://jank1510.github.io/profile-card-component-main/',
          repositorio: 'https://github.com/Jank1510/profile-card-component-main',
          background: '#19a1ad',
          var: 'none'
        },
        {
          titulo: 'QR Code',
          imgFondo: previewAsset('qr-code'),
          info: 'Componente visual para codigo QR.',
          preview: 'https://jank1510.github.io/qr-code-component-main/',
          repositorio: 'https://github.com/Jank1510/qr-code-component-main',
          background: '#3685fe',
          var: 'none'
        },
        {
          titulo: 'Stats Preview',
          imgFondo: previewAsset('stats-preview'),
          info: 'Componente de tarjeta para vista previa de estadisticas.',
          preview: 'https://jank1510.github.io/Stats-preview-card-component/',
          repositorio: 'https://github.com/Jank1510/Stats-preview-card-component',
          background: '#502d67',
          var: 'none'
        },
        {
          titulo: 'NFT Preview',
          imgFondo: previewAsset('nft-card'),
          info: 'Vista previa de una tarjeta NFT.',
          preview: 'https://jank1510.github.io/nft-preview-card-component-main/',
          repositorio: 'https://github.com/Jank1510/nft-preview-card-component-main',
          background: '#0d182a',
          var: 'none'
        },
        {
          titulo: 'Advice Generator',
          imgFondo: previewAsset('advice-generator'),
          info: 'Web generadora de consejos usando Advice Slip API.',
          preview: 'https://jank1510.github.io/advice-generator-app/',
          repositorio: 'https://github.com/Jank1510/advice-generator-app',
          background: '#52ffa8',
          var: 'none'
        },
        {
          titulo: 'Social Proof',
          imgFondo: previewAsset('social-proof'),
          info: 'Seccion de pruebas sociales para landing page.',
          preview: 'https://jank1510.github.io/Social-Proof-Section/',
          repositorio: 'https://github.com/Jank1510/Social-Proof-Section',
          background: '#511f50',
          var: 'none'
        },
        {
          titulo: 'Testimonials Grid',
          imgFondo: previewAsset('testimonials-grid'),
          info: 'Seccion de cuadriculas de testimonios.',
          preview: 'https://jank1510.github.io/Testimonials-grid-section/',
          repositorio: 'https://github.com/Jank1510/Testimonials-grid-section',
          background: '#7541c9',
          var: 'none'
        },
        {
          titulo: 'Expenses Chart',
          imgFondo: previewAsset('expenses-chart'),
          info: 'Diseno de grafica para gastos.',
          preview: 'https://jank1510.github.io/expenses-chart-component/',
          repositorio: 'https://github.com/Jank1510/expenses-chart-component',
          background: '#eb775e',
          var: 'none'
        },
        {
          titulo: 'Chat App CSS',
          imgFondo: previewAsset('chat-app'),
          info: 'Ilustracion de una app de chat hecha con CSS.',
          preview: 'https://jank1510.github.io/Chat-app-css-illustration-master/',
          repositorio: 'https://github.com/Jank1510/Chat-app-css-illustration-master',
          background: '#dc3ffe',
          var: 'none'
        },
        {
          titulo: 'Card Details Form',
          imgFondo: previewAsset('card-form'),
          info: 'Formulario dinamico para detalles de tarjeta.',
          preview: 'https://jank1510.github.io/interactive-card-details-form/',
          repositorio: 'https://github.com/Jank1510/interactive-card-details-form',
          background: '#22092f',
          var: 'none'
        },
        {
          titulo: 'Intro Section',
          imgFondo: previewAsset('intro-section'),
          info: 'Seccion principal de introduccion con navegacion desplegable.',
          preview: 'https://jank1510.github.io/intro-section-with-dropdown-navigation-main/',
          repositorio: 'https://github.com/Jank1510/intro-section-with-dropdown-navigation-main',
          background: '#dbc428',
          var: 'none'
        },
        {
          titulo: 'Presupuesto App',
          imgFondo: previewAsset('budget-app'),
          info: 'Aplicacion dinamica para presupuestos.',
          preview: 'https://jank1510.github.io/Presupuesto-App/',
          repositorio: 'https://github.com/Jank1510/Presupuesto-App',
          background: '#ac3362',
          var: 'none'
        },
        {
          titulo: 'Listado Personas',
          imgFondo: previewAsset('people-list'),
          info: 'Aplicacion para listado de personas.',
          preview: 'https://jank1510.github.io/Listado-de-personas/',
          repositorio: 'https://github.com/Jank1510/Listado-de-personas',
          background: '#0f96b9',
          var: 'none'
        },
        {
          titulo: 'Reloj Digital',
          imgFondo: previewAsset('clock-app'),
          info: 'Reloj digital para web.',
          preview: 'https://jank1510.github.io/Reloj-Digital/',
          repositorio: 'https://github.com/Jank1510/Reloj-Digital',
          background: '#90c9ac',
          var: 'none'
        },
        {
          titulo: 'Bookmark Landing',
          imgFondo: previewAsset('bookmark-landing'),
          info: 'Landing page para marcador de destino web.',
          preview: 'https://jank1510.github.io/bookmark-landing-page-master/',
          repositorio: 'https://github.com/Jank1510/bookmark-landing-page-master',
          background: '#5467ce',
          var: 'none'
        },
        {
          titulo: 'To-do App',
          imgFondo: previewAsset('todo-app'),
          info: 'Todo app para gestionar tareas de forma sencilla.',
          preview: 'https://jank1510.github.io/To-do-App/',
          repositorio: 'https://github.com/Jank1510/To-do-App',
          background: '#542095',
          var: 'none'
        }
      ]
    this.proyectosDestacados = [portfolioItems[0]]
    this.dataPortafolio = this.groupPortfolioItems(portfolioItems)
  }

  ngOnInit(): void {
  }

  ajusteResolucion(event: Event): void {
    this.width = window.innerWidth
  }

  EventPortafolio(buttonNameAnimation: string): void {
    if (this.animandoPortafolio) {
      return
    }

    const siguientePagina = buttonNameAnimation === 'siguienteAnimation'
      ? this.numeroDePagina + 1
      : this.numeroDePagina - 1

    if (siguientePagina < 0 || siguientePagina >= this.dataPortafolio.length) {
      return
    }

    this.animandoPortafolio = true
    this.animationScroll = ''
    setTimeout(() => {
      this.animationScroll = buttonNameAnimation
      setTimeout(() => {
        this.numeroDePagina = siguientePagina
      }, 440)
      setTimeout(() => {
        this.animationScroll = ''
        this.animandoPortafolio = false
      }, 900)
    }, 1)
  }

  Redireccionar(enlace: string): void {
    window.open(enlace, '_blank')
  }

  abrirRepositorioEnMovil(enlace: string): void {
    if (this.width < 1270) {
      this.Redireccionar(enlace)
    }
  }

  private groupPortfolioItems(items: PortfolioItem[]): PortfolioItem[][] {
    const itemsPerPage = 8
    const pages: PortfolioItem[][] = []

    for (let index = 0; index < items.length; index += itemsPerPage) {
      pages.push(items.slice(index, index + itemsPerPage))
    }

    return pages
  }
}
