const fs = require('fs')
const path = require('path')
const { spawnSync } = require('child_process')

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const outputDir = path.join(__dirname, '..', 'src', 'assets', 'portfolio-screenshots')
const profileDir = path.join(__dirname, '..', '.tmp-edge-profile')

const projects = [
  ['jank-os', 'https://ia.nas-jankos.com/'],
  ['blog-preview-card', 'https://jank1510.github.io/blog-preview-card-main/'],
  ['challenger-amigo-secreto', 'https://jank1510.github.io/Challenger-Amigo-Secreto/'],
  ['rest-countries', 'https://jank1510.github.io/rest-countries-api/'],
  ['ecommerce-product', 'https://jank1510.github.io/ecommerce-product-page-main/'],
  ['space-tourism', 'https://jank1510.github.io/space-tourism-website/'],
  ['comments-section', 'https://jank1510.github.io/interactive-comments-section/'],
  ['rock-paper-scissors', 'https://jank1510.github.io/rock-paper-scissors-master/'],
  ['calculator', 'https://jank1510.github.io/Calculator-app/'],
  ['room-homepage', 'https://jank1510.github.io/room-homepage/'],
  ['social-dashboard', 'https://jank1510.github.io/social-media-dashboard-with-theme-switcher-master/'],
  ['profile-card', 'https://jank1510.github.io/profile-card-component-main/'],
  ['qr-code', 'https://jank1510.github.io/qr-code-component-main/'],
  ['stats-preview', 'https://jank1510.github.io/Stats-preview-card-component/'],
  ['nft-card', 'https://jank1510.github.io/nft-preview-card-component-main/'],
  ['advice-generator', 'https://jank1510.github.io/advice-generator-app/'],
  ['social-proof', 'https://jank1510.github.io/Social-Proof-Section/'],
  ['testimonials-grid', 'https://jank1510.github.io/Testimonials-grid-section/'],
  ['expenses-chart', 'https://jank1510.github.io/expenses-chart-component/'],
  ['chat-app', 'https://jank1510.github.io/Chat-app-css-illustration-master/'],
  ['card-form', 'https://jank1510.github.io/interactive-card-details-form/'],
  ['intro-section', 'https://jank1510.github.io/intro-section-with-dropdown-navigation-main/'],
  ['budget-app', 'https://jank1510.github.io/Presupuesto-App/'],
  ['people-list', 'https://jank1510.github.io/Listado-de-personas/'],
  ['clock-app', 'https://jank1510.github.io/Reloj-Digital/'],
  ['bookmark-landing', 'https://jank1510.github.io/bookmark-landing-page-master/'],
  ['todo-app', 'https://jank1510.github.io/To-do-App/']
]

fs.mkdirSync(outputDir, { recursive: true })

for (const [slug, url] of projects) {
  const output = path.join(outputDir, `${slug}.png`)
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--disable-extensions',
    '--no-first-run',
    '--no-default-browser-check',
    `--user-data-dir=${profileDir}`,
    '--window-size=1365,768',
    '--virtual-time-budget=12000',
    `--screenshot=${output}`,
    url
  ]

  const result = spawnSync(edgePath, args, { encoding: 'utf8' })
  const exists = fs.existsSync(output)
  const size = exists ? fs.statSync(output).size : 0
  const status = exists && size > 1000 ? 'ok' : 'failed'

  console.log(`${status.padEnd(6)} ${slug.padEnd(22)} ${size.toString().padStart(8)} bytes`)

  if (result.stderr && result.status !== 0 && !exists) {
    console.error(result.stderr.trim())
  }
}
