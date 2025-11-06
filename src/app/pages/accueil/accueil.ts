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
import { trigger, transition, style, animate } from '@angular/animations';


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
  texteIntro: string = "Bonjour ! Je suis Kamélia Hamchouche, étudiante de 22 ans en BUT Informatique, parcours IAMSI. Mon profil repose sur une double expertise essentielle : la conception logicielle (Full-Stack, Frameworks modernes) et l'intégration de Systèmes d'Information (SI). J'excelle à traduire les besoins utilisateurs en solutions fonctionnelles et sécurisées. Quand je ne code pas, j'aime m'évader en jouant aux jeux vidéo ou en regardant des séries. Je suis actuellement à la recherche d'une formation supérieure (Master) pour affirmer mon expertise en architecture SI et piloter des projets numériques complexes."; 
  
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