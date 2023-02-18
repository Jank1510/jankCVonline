import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  dataPortafolio: any
  numeroDePagina: number
  animationScroll: String
  /*ancho pantalla*/
  width: number

  constructor() {
    this.animationScroll = ''
    this.numeroDePagina = 0
    this.width = window.screen.width
    this.dataPortafolio = [
      [
        {
          imgFondo: 'url(https://camo.githubusercontent.com/31ec43e47ddd4d0bd56f6d764e6ee7a4cd27f55e4dca1e459f08a20cc4a51afb/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f715f6175746f2c775f3930302f53637265656e73686f74732f6673336e7267347a6c736e6b3862796e793169742e6a7067)',
          info: "Pagina interactiva de paises usando el api REST Countries V2 API",
          preview: 'https://jank1510.github.io/rest-countries-api/',
          repositorio: 'https://github.com/Jank1510/rest-countries-api',
          background: '#202c37',
          var: 'paicesApi'
        },
        {
          imgFondo: 'url(https://camo.githubusercontent.com/91577ac6148b5a1f8a5e16366f2e75df717bc4579eea9ebf653a1dce148ba5a3/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f715f6175746f2c775f3730302f53637265656e73686f74732f626e30716367776563397673706a6378696872672e6a7067)',
          info: "Pagina principal de exposicion de productos",
          preview: 'https://jank1510.github.io/ecommerce-product-page-main/',
          repositorio: 'https://github.com/Jank1510/ecommerce-product-page-main',
          background: '#ff6f43',
          var: 'product'
        },
        {
          imgFondo: 'url(https://camo.githubusercontent.com/8ebc2bd418d284eba180608d7b2fae6aa5dab7382fa9ac2c45b2b11c5bfb5494/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f715f6175746f2c775f3930302f4368616c6c656e6765732f7775646a736276386739336161726c68766275642e6a7067)',
          info: "Sitio web de turismo espacial de varias páginas con detalles específicos que obtienen los datos de un .JSON",
          preview: 'https://jank1510.github.io/space-tourism-website/',
          repositorio: 'https://github.com/Jank1510/space-tourism-website',
          background: '#26486d',
          var: 'space'
        },
        {
          imgFondo: 'url(https://camo.githubusercontent.com/3da33197d1acd09fa4bc606a88469fc024aec1d6fb6d01977548c3834e8a512b/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f715f6175746f2c775f3930302f53637265656e73686f74732f74766170337773337037747a71667261686268752e6a7067)',
          info: "Una seccion de comentarios dinamica y responsiva",
          preview: 'https://jank1510.github.io/interactive-comments-section/',
          repositorio: 'https://github.com/Jank1510/interactive-comments-section',
          background: '#5457b6',
          var: 'comentSection'
        },
        {
          imgFondo: 'url(https://camo.githubusercontent.com/2bdcc447dfb44bb1ef20a05a8272b80ef20e72e7f9bce8ff61f570e717086b17/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f715f6175746f2c775f3930302f53637265656e73686f74732f67337774656e6f74736c6e656d337468767a71612e6a7067)',
          info: "Juego de piedra papel o tijera ",
          preview: 'https://jank1510.github.io/rock-paper-scissors-master/',
          repositorio: 'https://github.com/Jank1510/rock-paper-scissors-master',
          background: '#eca51b',
          var: 'juegoPiedraPapelTijera'
        },
        {
          imgFondo: 'url(https://camo.githubusercontent.com/dd0f603e85743ddc812329de7f9c1f4ee2a534cbc6814cc6216a470457f6923e/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f715f6175746f2c775f3730302f53637265656e73686f74732f7278737863346f67326f33726e377265777661352e6a7067)',
          info: "Calculadora online con temas integrados",
          preview: 'https://jank1510.github.io/Calculator-app/',
          repositorio: 'https://github.com/Jank1510/Calculator-app',
          background: '#394764',
          var: 'calculadora'
        },
        {
          imgFondo: 'url(https://camo.githubusercontent.com/e586c70d60e6a2620be3bfa38dc9e68c267b736d0dfb0f7972b417fd2d1b42a4/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f665f6175746f2c715f6175746f2c775f3930302f53637265656e73686f74732f6f7a7769797a737066646c666f356e6d77666a6e2e6a7067)',
          info: "Seccion de negocios de cuartos de habitaciones modernos",
          preview: 'https://jank1510.github.io/room-homepage/',
          repositorio: 'https://github.com/Jank1510/room-homepage',
          background: '#bbbcc1',
          var: 'roomHomepage'
        },
        {
          imgFondo: 'url(https://camo.githubusercontent.com/d5781811db402602e81268beabece9c7cf79f157ab01557076612a74a69dd12c/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f715f6175746f2c775f3930302f53637265656e73686f74732f676f747778746f3974336f3379636671787633722e6a7067)',
          info: "Tablero de redes sociales con cambio de tema",
          preview: 'https://jank1510.github.io/social-media-dashboard-with-theme-switcher-master/',
          repositorio: 'https://github.com/Jank1510/social-media-dashboard-with-theme-switcher-master',
          background: '#333a56',
          var: 'mediaDashboard'
        }
      ],
      [
        {
          imgFondo: 'url(https://camo.githubusercontent.com/1c8efcd0e7c29b715e0a75debfccdee007da03aa8fbb410f7f8a9b004797270f/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f715f6175746f2c775f3730302f53637265656e73686f74732f7964656d666466777566776e6b647a696f7278662e6a7067)',
          info: "Tarjeta de perfil personal de red social",
          preview: 'https://jank1510.github.io/profile-card-component-main/',
          repositorio: 'https://github.com/Jank1510/profile-card-component-main',
          background: '#19a1ad',
          var: 'profileCard'
        },
        {
          imgFondo: 'url(https://camo.githubusercontent.com/f3949c9a0b6df6ebce545dc39c1b33a17a6bd5a4c8a47d282137691e271e06a1/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f715f6175746f2c775f3730302f53637265656e73686f74732f72666976306c7a71766a6171736c72706933666c2e6a7067)',
          info: "Diseño de codigo Qr",
          preview: 'https://jank1510.github.io/qr-code-component-main/',
          repositorio: 'https://github.com/Jank1510/qr-code-component-main',
          background: '#3685fe',
          var: 'qrCode'
        },
        {
          imgFondo: 'url(https://camo.githubusercontent.com/f13c8f435b8fbc698a29b0bcb2fbd00c9bca967227397d62954df18f4e90d86a/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f665f6175746f2c715f6175746f2c775f3930302f53637265656e73686f74732f6c76726a7474337a637972327a366366716f766e2e6a7067)',
 
          info: "Componente de tarjeta de vista previa de estadísticas",
          preview: 'https://jank1510.github.io/Stats-preview-card-component/',
          repositorio: 'https://github.com/Jank1510/Stats-preview-card-component',
          background: '#502d67',
          var: 'statsPreview'
        },
        {
          imgFondo: 'url(https://camo.githubusercontent.com/fda88bd6e8e4f49f470f516f860c145e9f9555ba41bfd4b49c8f5db12cdab853/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f665f6175746f2c715f6175746f2c775f3930302f53637265656e73686f74732f7766376f67677378716f6a39396e6e39763176382e6a7067)',
          info: "Vista previa de una tarjeta NFTS",
          preview: 'https://jank1510.github.io/nft-preview-card-component-main/',
          repositorio: 'https://github.com/Jank1510/nft-preview-card-component-main',
          background: '#0d182a',
          var: 'nfts'
        },
        {
          imgFondo: 'url(https://camo.githubusercontent.com/31d36ed0736287617685077f8be4b109efc857dc9e556a5bfd5e96dba525be76/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f715f6175746f2c775f3930302f53637265656e73686f74732f677773706e73616d79766e6d767a3072756b71712e6a7067)',
          info: "Web generadora de avisos por medio de Advice Slip API",
          preview: 'https://jank1510.github.io/advice-generator-app/',
          repositorio: 'https://github.com/Jank1510/advice-generator-app',
          background: '#52ffa8',
          var: 'adviceGenerator'
        },
        {
          imgFondo: 'url(https://camo.githubusercontent.com/71a2fa81497c743a8fb19f4acd180c63167092f4156356793be0833cc9ecb4ee/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f715f6175746f3a676f6f642c775f3930302f4368616c6c656e6765732f63356d6e65736e35656b6e65616c6d6a7a3477322e6a7067)',
          info: "Seccion de pruebas sociales",
          preview: 'https://jank1510.github.io/Social-Proof-Section/',
          repositorio: 'https://github.com/Jank1510/Social-Proof-Section',
          background: '#511f50',
          var: 'SeccionPruebas'
        },
        {
          imgFondo: 'url(https://camo.githubusercontent.com/81242425030c21b8e65de5c6853d8972ee37915549e53d7b9b518c6c9339681f/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f715f6175746f2c775f3930302f53637265656e73686f74732f62726d7071756c3661347a776a326637767574342e6a7067)',
          info: "Seccion de cuadriculas de testimonios",
          preview: 'https://jank1510.github.io/Testimonials-grid-section/',
          repositorio: 'https://github.com/Jank1510/Testimonials-grid-section',
          background: '#7541c9',
          var: 'testimonialsGrid'
        },
        {
          imgFondo: 'url(https://camo.githubusercontent.com/bca1d13bb51cdcb618a6a137525bdd1b3dd4569ea2de886a51683960545137f0/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f715f6175746f2c775f3930302f53637265656e73686f74732f7874693265773768387a6d667078716c706978672e6a7067)',
          info: "Diseño de gastos graficos",
          preview: 'https://jank1510.github.io/expenses-chart-component/',
          repositorio: 'https://github.com/Jank1510/expenses-chart-component',
          background: '#eb775e',
          var: 'expensesCHART'
        }
      ],
      [
        {
          imgFondo: 'url(https://camo.githubusercontent.com/7a4bf7ab00aac20b718ffd706187cf51197c5038437c8b490926105b11cf486d/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f715f6175746f2c775f3730302f53637265656e73686f74732f6f7a6a6a6c7135346c3965776f793976737a79612e6a7067)',
          info: "Ilustracion de una app de chat",
          preview: 'https://jank1510.github.io/Chat-app-css-illustration-master/',
          repositorio: 'https://github.com/Jank1510/Chat-app-css-illustration-master',
          background: '#dc3ffe',
          var: 'cahtAppCSS'
        },
        {
          imgFondo: 'url(https://camo.githubusercontent.com/10fb53eb331c076ccc7e78987b0c2f07e4adcff4e46a08c00b13e884fdfda013/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f715f6175746f2c775f3930302c665f6175746f2f53637265656e73686f74732f61766267776f6775643939737077776777766e702e6a7067)',
          info: "Formulario de detalles de tarjeta dinamica",
          preview: 'https://jank1510.github.io/interactive-card-details-form/',
          repositorio: 'https://github.com/Jank1510/interactive-card-details-form',
          background: '#22092f',
          var: 'interactiveCard'
        }, {
          imgFondo: 'url(https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/qli3kybsxpmw6i3qtfkc.jpg)',
          info: "Seccion principal de introduccion",
          preview: 'https://jank1510.github.io/intro-section-with-dropdown-navigation-main/',
          repositorio: 'https://github.com/Jank1510/intro-section-with-dropdown-navigation-main',
          background: '#DBC428',
          var: 'seccionmainPrincipal'
        }, {
          imgFondo: 'url(https://raw.githubusercontent.com/Jank1510/Presupuesto-App/main/design/design.png)',
          info: "Aplicacion de presupuestos dinamica",
          preview: 'https://jank1510.github.io/Presupuesto-App/',
          repositorio: 'https://github.com/Jank1510/Presupuesto-App',
          background: '#AC3362',
          var: 'presupuestosapp'
        }, {
          imgFondo: 'url(https://raw.githubusercontent.com/Jank1510/Listado-de-personas/main/design/listadopersonas.png)',
          info: "Listado de personas app",
          preview: 'https://jank1510.github.io/Listado-de-personas/',
          repositorio: 'https://github.com/Jank1510/Listado-de-personas',
          background: '#0F96B9',
          var: 'listadoPersonasxd'
        }, {
          imgFondo: 'url(https://raw.githubusercontent.com/Jank1510/Reloj-Digital/main/design/reloj.png)',
          info: "Relojs Web App",
          preview: 'https://jank1510.github.io/Reloj-Digital/',
          repositorio: 'https://github.com/Jank1510/Reloj-Digital',
          background: '#90C9AC',
          var: 'relojWebapp'
        }, {
          imgFondo: 'url(https://camo.githubusercontent.com/9a5870c83244d5964c2e76ccda46befbc0ba4d70a714a6218816d36b2521001d/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f715f6175746f2c775f3930302f53637265656e73686f74732f757961716b36706c6768673568636671636a3472)',
          info: "Pagina de marcador de destino web",
          preview: 'https://github.com/Jank1510/bookmark-landing-page-master',
          repositorio: 'https://jank1510.github.io/bookmark-landing-page-master/',
          background: '#5467CE',
          var: 'bookmarkLandingpage'
        }, {
          imgFondo: 'url(https://camo.githubusercontent.com/99bd0a04336bb72ba8beed74fd824c7a3d5033f7c959e04b398d6f8565d9a468/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647a32303973366a6b2f696d6167652f75706c6f61642f665f6175746f2c715f6175746f2c775f3930302f53637265656e73686f74732f73726f706f377470726764686b636170636269792e6a7067)',
          info: "Todo app, gestiona tus taras de una forma facil",
          preview: 'https://jank1510.github.io/To-do-App/',
          repositorio: 'https://github.com/Jank1510/To-do-App',
          background: '#542095',
          var: 'todoApP'
        }
      ]
    ]
  }

  ngOnInit(): void {
  }
  ajusteResolucion(event: any): void {//funcion para actualizar el tamaño del ancho en px de la pantalla
    this.width = (event.target.innerWidth)
    console.log(this.width)
  }

  EventPortafolio(buttonNameAnimation: string): void {//como parametro el nombre de la animacion correspondiente
    this.animationScroll = ''
    setTimeout(() => {
      this.animationScroll = buttonNameAnimation
      setTimeout(() => {
        buttonNameAnimation == 'siguienteAnimation' ? this.numeroDePagina++ : this.numeroDePagina--
      }, 500)
    }, 1)
  }
  Redireccionar(enlace: string): void {
    location.href = enlace;
  }

}
