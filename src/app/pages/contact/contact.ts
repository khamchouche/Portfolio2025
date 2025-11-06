// Fichier: src/app/pages/contact/contact.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface SocialLink {
  name: string;
  url: string;
  iconClass: string; // Utilisé pour le style de l'icône
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent implements OnInit {

  // Données personnelles (à personnaliser)
  nomComplet: string = "Kamélia HAMCHOUCHE";
  telephone: string = "+33 6 XX XX XX XX";
  emailPrincipal: string = "votre.email@example.com"; // ⬅️ À PERSONNALISER

  // Liens sociaux et d'action (à personnaliser avec vos vrais liens)
socialLinks: SocialLink[] = [
    { name: 'Email Direct', url: `mailto:${this.emailPrincipal}`, iconClass: 'fa-envelope' },
    { name: 'Discord', url: 'https://discordapp.com/users/VotreIDDiscord', iconClass: 'fa-discord' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/VotreProfil', iconClass: 'fa-linkedin' },
  ];

  constructor() { }

  ngOnInit(): void {
    // Si vous utilisez Font Awesome, vous devez l'inclure dans votre index.html
  }
getIconClasses(icon: string): { [key: string]: boolean } {
    const classes: { [key: string]: boolean } = {};
    if (icon.startsWith('fa-')) {
      // Les icônes de marques (fa-discord, fa-github, fa-linkedin) ont le préfixe 'fa-brands'
      if (icon === 'fa-discord' || icon === 'fa-github' || icon === 'fa-linkedin') {
        classes['fa-brands'] = true;
      } else {
        // Les autres icônes (comme fa-envelope) ont le préfixe 'fa-solid' (ou 'fas')
        classes['fa-solid'] = true;
      }
      classes[icon] = true; // Ajoute la classe spécifique de l'icône
    }
    return classes;
  }
  // Méthode pour copier le mail au lieu d'ouvrir le client mail
  copyEmail(): void {
    navigator.clipboard.writeText(this.emailPrincipal)
      .then(() => alert('Adresse email copiée : ' + this.emailPrincipal))
      .catch(err => console.error('Impossible de copier le texte:', err));
  }
}