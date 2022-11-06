import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactame',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.css']
})
export class ContactameComponent implements OnInit {
  form!: any //variable que es iniciada con el form del dom
  exitoEnvio: boolean
  name: string = ''
  email: string = ''
  asunto: string = ''
  invalid: boolean = false

  constructor() {
    this.exitoEnvio = false
  }

  ngOnInit(): void {
  }
  
  submit_btn() {
    if (this.name == '' || this.email == '' || this.asunto == '') {//validacion del formulario
      this.invalid = true
    } else {
      this.form = document.getElementById('form_')
      this.form.addEventListener('submit', this.handlesubmit(event))  
    }

  }
  /*funciones para evitar que la pagina recarge */
  async handlesubmit(event: any) {
    event.preventDefault()
    const form = new FormData(this.form)
    const response = await fetch(this.form.action, {
      method: this.form.method,
      body: form,
      headers: {
        'Accept': 'application/json'
      }
    })
    if (response.ok) {
      this.exitoEnvio = true
      this.invalid = false
      this.form.reset()
    }
  }
}
