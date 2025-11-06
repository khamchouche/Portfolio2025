// Fichier: src/app/pages/experiences/experiences.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../models/experience'; // Assurez-vous du chemin correct

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.html',
  styleUrls: ['./experiences.scss']
})
export class Experiences implements OnInit {
  
  // 🛑 DONNÉES STRUCTURÉES POUR LA CHRONOLOGIE
  parcours: Experience[] = [];

  constructor() { }

  ngOnInit(): void {
    this.parcours = [
      {
        id: 'but-initial',
        titre: 'Début BUT Informatique (Tronc Commun)',
        entreprise: 'IUT de Pau',
        date_debut: 'Sept. 2022',
        date_fin: 'Juin 2023',
        description: 'Acquisition des fondamentaux en algorithmique, base de données et développement web.',
        type: 'academique'
      },
      {
        id: 'stage-eden',
        titre: 'Stage - Développement d\'une Application Interne',
        entreprise: 'Eden Auto (Pau)',
        date_debut: 'Mai 2023',
        date_fin: 'Juin 2023',
        description: 'Stage de 8 semaines en entreprise pour appliquer les compétences de première année.',
        type: 'professionnel'
      },
      {
        id: 'but-iamsi',
        titre: 'Spécialisation BUT - Parcours IAMSI',
        entreprise: 'IUT de Pau',
        date_debut: 'Sept. 2023',
        date_fin: 'Juin 2025',
        description: 'Approfondissement en intégration d\'applications, architecture SI et gestion de projet Agile.',
        type: 'academique'
      },
      {
        id: 'alternance-exakis',
        titre: 'Alternance Développeur Full-Stack',
        entreprise: 'Exakis Nelite',
        date_debut: 'Sept. 2025',
        date_fin: 'Présent',
        description: 'Alternance en cours, mise en œuvre de solutions d\'entreprise et Cloud (Azure).',
        type: 'professionnel'
      },
    ].reverse(); // Affiche du plus récent au plus ancien (standard pour un CV/Parcours)
  }
}