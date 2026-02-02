import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // 👈 Ajout du Schéma pour Swiper
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Projet } from '../../models/projet'; 
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// 🛑 IMPORTATIONS POUR LE CARROUSEL SWIPER
import { register } from 'swiper/element/bundle';
register(); // Enregistre les composants swiper-container et swiper-slide

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projets.html',
  styleUrls: ['./projets.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 👈 Nécessaire pour que Angular accepte les balises Swiper
})
export class Projets implements OnInit {
  
  allProjets: Projet[] = [];
  selectedProjet: Projet | null = null;
  showModal: boolean = false;

  // Variable pour suivre l'image affichée dans la modale
  currentImageIndex: number = 0;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.allProjets = [
      {
        id: 'projet-voyage',
        carousel_images:[],
        titre: 'Plateforme de Voyage & Guide',
        type: 'Application Web',
        image_url: 'assets/bookngo.jpeg',
        description_sommaire: 'Développement d\'une application web responsive mettant en relation voyageurs et guides, avec architecture MVC.',
        description_complete: 'Projet universitaire complet mené en équipe avec architecture MVC. Le système permet la gestion des profils (voyageurs et guides), l\'organisation des itinéraires et la messagerie instantanée. Il a été développé en utilisant une organisation agile (Scrum).',
        duree: '5 mois',
        contexte: 'Projet universitaire - BUT Informatique',
        technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
        youtube_url: 'https://www.youtube.com/embed/WDhvXvNtsNY'
      },
      {
        id: 'agent-ia-avenir',
        titre: 'Agent IA : Prédicteur de Carrière',
        type: 'Intelligence Artificielle',
        image_url: 'assets/ia.jpeg',
        carousel_images: [],
        description_sommaire: 'Agent conversationnel intelligent utilisant le RAG pour analyser mon profil et conseiller les recruteurs.',
        description_complete: 'Cet agent utilise LangChain et OpenAI pour ingérer l\'intégralité de mon portfolio et de mon CV. Il répond aux questions des recruteurs sur mes compétences, simule mon évolution professionnelle vers la Data Science et peut même identifier des opportunités d\'emploi locales en analysant la cohérence entre mon profil et les besoins du marché.',
        duree: '4h',
        contexte: 'Projet de recherche personnel (RAG & LLM)',
        technologies: ['LangChain', 'OpenAI API', 'Python', 'Vector Databases'],
        youtube_url: 'https://www.youtube.com/embed/3KWi7Um9dXI',
      },
      {
        id: 'projet-mam-audiovisuel',
        titre: 'MAM (Media Asset Manager)',
        type: 'Ingénierie Logicielle & Data',
        image_url: 'assets/logo_BTS_Play.png',
        carousel_images: [],
        description_sommaire: 'Développement d’un système de gestion d’actifs numériques pour le BTS Audiovisuel du Lycée René Cassin.',
        description_complete: 'Conception d’un logiciel MAM (Media Asset Manager) pour automatiser le workflow de production audiovisuelle. Le système assure la détection automatique des fichiers sur NAS, l’enrichissement en métadonnées techniques, et le pilotage du moteur de transcodage FFastrans via API.',
        duree: 'En cours (Année 2025-2026)',
        contexte: 'Projet de fin d’études - Lycée René Cassin',
        technologies: ['Architecture distribuée', 'API REST', 'FFastrans', 'Open Source', 'Gestion de base de données'],
        youtube_url: 'https://www.youtube.com/embed/TON_ID_DEMO_MAM',
      },
      {
        id: 'projet-power-apps-gestion',
        titre: 'Application de Gestion de Projets',
        type: 'Développement Low-Code',
        image_url: 'assets/powerapps.jpeg',
        carousel_images: [ ],
        description_sommaire: 'Conception d’une application mobile/web pour le suivi et la modification de projets avec notifications automatisées.',
        description_complete: 'Développement d’une solution complète sous Power Apps permettant aux utilisateurs de lister, créer, modifier et supprimer des projets. L’application est synchronisée avec une liste SharePoint. J’ai intégré un flux Power Automate qui déclenche l’envoi automatique d’un email de confirmation.',
        duree: '1 jour', 
        contexte: 'Formation technique - Exakis Nelite',
        technologies: ['Power Apps', 'Power Automate', 'SharePoint Online', 'UX/UI Design'],
        youtube_url: 'https://www.youtube.com/embed/Kxyskm5Ij8w',
      },
      {
        id: 'stage-edenauto-data',
        titre: 'Automatisation de pipeline DATA (ETL)',
        type: 'Data Engineering',
        image_url: 'assets/edenauto.jpeg', 
        carousel_images: [ ],
        description_sommaire: 'Développement d’une interface Python générique pour l’extraction et l’intégration automatisée de données API vers SQL Server.',
        description_complete: 'Projet réalisé au sein du pôle DATA d’Edenauto. J’ai conçu un programme Python capable d’analyser dynamiquement n’importe quelle structure JSON d’API. Le système automatise le cycle complet de la donnée : extraction via API REST, nettoyage des clés, transformation en DataFrames (Pandas) et synchronisation finale (Merge SQL).',
        duree: '2 mois',
        contexte: 'Stage de BUT 2 - Edenauto (Pau)',
        technologies: ['Python (Pandas/Requests)', 'SQL Server', 'API REST', 'ETL', 'Architecture de données'],
        youtube_url: 'https://www.youtube.com/embed/rWrkfGDKjnc',
      },
      {
        id: 'projet-powerbi-analysis',
        titre: 'Visualisation de données décisionnelles',
        type: 'Business Intelligence',
        image_url: 'assets/powerBi1.png',
        carousel_images: [
          'assets/powerBi1.png', 
          'assets/powerBi2.png', 
        ],
        description_sommaire: 'Analyse et mise en forme de jeux de données complexes pour faciliter la prise de décision stratégique.',
        description_complete: 'Conception d’un tableau de bord interactif sous Power BI à partir de sources de données Excel. Le travail a porté sur le nettoyage des données (Power Query), la création de mesures calculées (DAX) et la mise en place de visualisations pertinentes pour l’analyse de tendances et la synthèse de KPIs.',
        duree: '2 jours',
        contexte: 'Formation technique (Exakis Nelite)',
        technologies: ['Power BI', 'Excel', 'DAX', 'Data Analysis']
      }
    ];
  }

  // --- CHANGEMENT D'IMAGE DANS LA MODALE ---
  setMainImage(index: number): void {
    this.currentImageIndex = index;
  }

  // --- SÉCURISATION DES URL YOUTUBE ---
  getSafeYoutubeUrl(youtubeUrl: string | undefined): SafeResourceUrl {
    if (!youtubeUrl) return '';
    
    // Si c'est déjà un format embed
    if (youtubeUrl.includes('youtube.com/embed/')) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeUrl);
    }
    
    // Extraction de l'ID si c'est un lien classique
    const videoId = youtubeUrl.split('v=')[1]?.split('&')[0];
    if (videoId) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
    }
    return '';
  }

  // --- GESTION DE LA MODALE ---
  openModal(projet: Projet): void {
this.selectedProjet = projet;
    this.currentImageIndex = 0; // 👈 Crucial pour ne pas chercher une image inexistante
    this.showModal = true;

  }

  closeModal(): void {
    this.showModal = false;
    this.selectedProjet = null;
    
    // Rétablir le scroll du fond
    document.body.style.overflow = 'auto';
  }
}