// Fichier: src/app/pages/projets/projets.component.ts (MIS À JOUR)

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Projet } from '../../models/projet'; 
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // 🛑 NOUVEL IMPORT

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projets.html',
  styleUrls: ['./projets.scss']
})
export class Projets implements OnInit {
  
  allProjets: Projet[] = [];
  selectedProjet: Projet | null = null;
  showModal: boolean = false;

  constructor(private sanitizer: DomSanitizer) { } // 🛑 INJECTION DE DOMSANITIZER

  ngOnInit(): void {
    this.allProjets = [
      {
        id: 'projet-voyage',
        titre: 'Plateforme de Voyage & Guide',
        type: 'Application Web',
        image_url: 'assets/bookngo.jpeg',
        description_sommaire: 'Développement d\'une application web responsive mettant en relation voyageurs et guides, avec architecture MVC.',
        description_complete: 'Projet universitaire complet mené en équipe avec architecture MVC. Le système permet la gestion des profils (voyageurs et guides), l\'organisation des itinéraires et la messagerie instantanée. Il a été développé en utilisant une organisation agile (Scrum).',
        duree: '5 mois',
        contexte: 'Projet universitaire - BUT Informatique',
        technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
        youtube_url: 'https://www.youtube.com/embed/WDhvXvNtsNY' // 🛑 TRÈS IMPORTANT: Utilisez l'URL EMBED
      },
      {
        id: 'projet-angular',
        titre: 'Portfolio Tactique (Angular)',
        type: 'Front-end',
        image_url: 'assets/projets/angular_card.jpg',
        description_sommaire: 'Conception et développement de ce portfolio interactif en mode Standalone.',
        description_complete: 'Mise en œuvre du style Cyber-Minimaliste, gestion du routage One-Page Scroll, et utilisation de la logique Standalone d\'Angular.',
        duree: '3 semaines',
        contexte: 'Projet Personnel',
        technologies: ['Angular', 'TypeScript', 'SCSS', 'Firebase']
      },
      {
        id: 'alternance-si',
        titre: 'Gestion d\'Infrastructure SI (Alternance)',
        type: 'Intégration SI',
        image_url: 'assets/projets/si_gestion.jpg',
        description_sommaire: 'Intégration d\'applications métiers Odoo et gestion documentaire via SharePoint au sein d\'Exakis Nelite.',
        description_complete: 'Mise en place de modules Odoo pour la gestion de processus internes et structuration de l\'environnement SharePoint pour la collaboration des équipes. Fort accent sur la sécurité et l\'architecture SI.',
        duree: 'En cours',
        contexte: 'Alternance (Exakis Nelite)',
        technologies: ['Odoo', 'SharePoint', 'Azure', 'Python']
      },
      // Ajoutez d'autres projets ici...
    ];
  }

  // 🛑 NOUVELLE MÉTHODE : Sécuriser l'URL YouTube
  getSafeYoutubeUrl(youtubeUrl: string): SafeResourceUrl {
    // Vérifier si l'URL est déjà une URL d'intégration
    if (youtubeUrl.includes('youtube.com/embed/')) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeUrl);
    }
    // Sinon, convertir une URL standard en URL d'intégration
    const videoId = youtubeUrl.split('v=')[1]?.split('&')[0];
    if (videoId) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
    }
    return ''; // Retourne une chaîne vide si l'URL n'est pas valide
  }

  openModal(projet: Projet): void {
    this.selectedProjet = projet;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedProjet = null;
  }
}