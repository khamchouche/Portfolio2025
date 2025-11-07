// Fichier: src/app/pages/contact/contact.component.ts (Extrait)

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; // Pour le formulaire

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule], // Ajout de ReactiveFormsModule
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup; // Déclaration du formulaire

  // Informations de contact pour les cartes de gauche
  chatEmail: string = 'info@domainname.com';
  adresse: string = 'Warneve Park Streetperrine, FL 33157 New York City';
  telephone: string = '+01 (555) 000-0000';
  horaires: string = 'Mon-Fri From 8am to 5pm';
  
  // Vous n'aurez plus besoin de socialLinks directs pour cette mise en page si vous suivez le modèle
  // Mais si vous voulez garder une barre de réseaux, vous pouvez la réintégrer
  socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/votrenom/', iconClass: 'fa-linkedin' },
    { name: 'GitHub', url: 'https://github.com/votreprofil', iconClass: 'fa-github' },
    { name: 'Email Direct', url: 'mailto:votre.email@example.com', iconClass: 'fa-envelope' },
  ];

  constructor(private fb: FormBuilder) { } // Injection de FormBuilder

  ngOnInit(): void {
    // Initialisation du formulaire (comme dans le modèle)
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  // Méthode pour copier l'email (si toujours utilisée)
  copyEmail(): void {
    navigator.clipboard.writeText(this.chatEmail).then(() => {
      alert('Email copié dans le presse-papiers !');
    }).catch(err => {
      console.error('Erreur lors de la copie de l\'email: ', err);
    });
  }

  // Méthode pour soumettre le formulaire
  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Formulaire soumis avec succès:', this.contactForm.value);
      alert('Votre message a été envoyé !');
      this.contactForm.reset(); // Réinitialise le formulaire après envoi
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }

  // Fonction pour les classes d'icônes Font Awesome (si besoin pour les cartes de contact)
  getIconClasses(icon: string): { [key: string]: boolean } {
    const classes: { [key: string]: boolean } = {};
    if (icon.startsWith('fa-')) {
      const isBrand = ['fa-linkedin', 'fa-github', 'fa-envelope'].includes(icon);
      classes[isBrand ? 'fa-brands' : 'fa-solid'] = true;
      classes[icon] = true;
    }
    return classes;
  }
}