import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactame',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.css']
})
export class ContactameComponent implements OnInit {
  exitoEnvio: boolean
  name = ''
  email = ''
  asunto = ''
  mensaje = ''
  invalid = false

  constructor() {
    this.exitoEnvio = false
  }

  ngOnInit(): void {
  }

  async submit(form: NgForm, event: Event): Promise<void> {
    if (form.invalid) {
      this.invalid = true
      return
    }

    const formElement = event.target as HTMLFormElement
    const formData = new FormData(formElement)

    try {
      const response = await fetch(formElement.action, {
        method: formElement.method,
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      })

      if (response.ok) {
        this.exitoEnvio = true
        this.invalid = false
        form.resetForm()
      } else {
        this.invalid = true
      }
    } catch {
      this.invalid = true
    }
  }
}
