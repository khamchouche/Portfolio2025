import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser'; // 🛑 Import EmailJS

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;

  // 🛑 Remplacez par vos vraies infos
  chatEmail: string = 'hamchouchek65@gmail.com';
  adresse: string = 'Pau, France';
  telephone: string = '+33 6 XX XX XX XX';
  horaires: string = 'Disponible du Lundi au Vendredi';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

 onSubmit(): void {
  if (this.contactForm.valid) {
    
    const serviceID = 'service_le4prcc'; 
    const templateID = 'template_cviawqx';
    const publicKey = 'WAPVhG4698KpdM0rr';

    // 🛑 CORRECTION : Alignement des noms de variables sur votre template EmailJS
    const templateParams = {
      name: this.contactForm.value.firstName, // Dans votre template, vous avez mis {{name}}
      email: this.contactForm.value.email,    // Dans votre template (Reply To), vous avez mis {{email}}
      message: this.contactForm.value.message // Dans votre template, vous avez mis {{message}}
      // Note : Vous n'utilisez pas {{subject}} dans le corps du template sur votre capture
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Votre message a bien été envoyé directement à Kamélia !');
        this.contactForm.reset();
      }, (err) => {
        console.error('FAILED...', err);
        alert('Une erreur est survenue lors de l\'envoi.');
      });

  } else {
    alert('Veuillez remplir tous les champs obligatoires.');
  }
}}