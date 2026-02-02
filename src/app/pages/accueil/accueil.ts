// Fichier: src/app/pages/accueil/accueil.ts

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data'; 
import { Projet } from '../../models/projet'; 
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router';
import { CompetencesComponent } from '../competences/competences';
import { ContactComponent } from '../contact/contact';
import { Projets } from '../projets/projets';
import { Experiences } from '../experiences/experiences';



@Component({
  selector: 'app-accueil',
  standalone: true,
  // La modale est gardée dans les imports car elle pourrait être réutilisée par le bouton CV
  imports: [
    CommonModule, 
    RouterLink, 
    CompetencesComponent, // ⬅️ Nécessaire
    Projets,     // ⬅️ Nécessaire
   ContactComponent,
    Experiences      // ⬅️ Nécessaire
  ],
  
  templateUrl:'./accueil.html', 
  styleUrls: ['./accueil.scss']
})
export class AccueilComponent implements OnInit {
  

  // 🛑 PROPRIÉTÉS POUR LA TRONCATURE ET LECTURE PLUS
  maxTextLength: number = 280; // Coupe le texte après 280 caractères
  isTextExpanded: boolean = false; 

  // Variables de contenu (À PERSONNALISER)
  nomComplet: string = "HAMCHOUCHE Kamélia"; 
  titreRole: string = "Étudiante BUT Informatique IAMSI"; 
  photoUrl: string | null = null;
 // Fichier: src/app/pages/accueil/accueil.ts

texteIntro: string = "Bonjour ! Je suis Kamélia Hamchouche, étudiante de 21 ans en BUT Informatique (parcours IAMSI). Passionnée par l'exploitation intelligente des données, mon profil allie développement logiciel et analyse SI. Je m'épanouis particulièrement dans la résolution de problèmes complexes et la découverte de patterns au sein des données. En dehors du code, je suis passionnée de jeux vidéo et de séries. Mon objectif actuel est d'intégrer un Master spécialisé en Intelligence Artificielle et Data Science pour transformer les flux de données en leviers décisionnels et concevoir les solutions prédictives de demain.";
  projets$!: Observable<Projet[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // La page est maintenant entièrement statique au chargement.
  }

  // ----------------------------------------------------
  // LOGIQUE LIRE LA SUITE
  // ----------------------------------------------------

  get displayIntroText(): string {
    // Affiche la version tronquée si non dépliée et si le texte est trop long
    if (this.isTextExpanded || this.texteIntro.length <= this.maxTextLength) {
      return this.texteIntro;
    }
    return this.texteIntro.substring(0, this.maxTextLength) + '...';
  }

  get requiresReadMore(): boolean {
    // Détermine si le bouton "Lire la suite" doit être visible
    return this.texteIntro.length > this.maxTextLength;
  }

  toggleTextExpansion(): void {
    // Inverse l'état d'expansion au clic du bouton
    this.isTextExpanded = !this.isTextExpanded;
  }

  // ----------------------------------------------------
  // MÉTHODES CV
  // ----------------------------------------------------

  telechargerCV(): void {
    alert('Téléchargement du CV lancé !');
    // Vous pouvez insérer ici la logique finale pour ouvrir votre PDF
    // Exemple : window.open('assets/votre-cv.pdf', '_blank');
  }
}