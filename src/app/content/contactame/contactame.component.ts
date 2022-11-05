import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactame',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.css']
})
export class ContactameComponent implements OnInit {
  form!: any//variable que es iniciada con el form del dom
  exitoEnvio: boolean
  constructor() {
    this.exitoEnvio = false
  }

  ngOnInit(): void {
  }
  /*func8iones para evitar que la pagina recarge */

  submit_btn() {//PENDIENTE ARREGLO DE VALIDACION DE FORMULARIO
    /*
    this.form = document.getElementById('form_')
    this.form.addEventListener('submit', this.handlesubmit(event))*/
  }

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
      this.form.reset()
    }
  }
}
