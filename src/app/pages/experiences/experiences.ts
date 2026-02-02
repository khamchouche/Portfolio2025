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
        titre: 'BUT Informatique (IAMSI)',
        entreprise: 'IUT de Bayonne et du Pays basque',
        date_debut: 'Sept. 2022',
        date_fin: 'Juin 2026',
        description: 'Acquisition des fondamentaux en algorithmique, base de données, développement web et gestion de projet. Approfondissement en intégration d\'applications, architecture SI et gestion de projet.',
        type: 'academique'
      },
{
  id: 'stage-eden',
  titre: 'Stage - Data Engineer & Automatisation ETL',
  entreprise: 'Edenauto (Siège social - Pau)',
  date_debut: 'Avril 2025',
  date_fin: 'Juin 2025',
  description: 'Conception et développement d’un programme Python générique pour l’automatisation de flux de données. Ma mission a consisté à extraire des données complexes via une API REST, à transformer ces structures JSON en DataFrames (Pandas) et à orchestrer l’intégration automatisée vers un serveur SQL Server via des procédures de Merge, garantissant l’intégrité des bases de données sans doublons.',
  type: 'professionnel'
},
      {
        id: 'alternance-exakis',
        titre: 'Alternance Développeur Modern Work',
        entreprise: 'Exakis Nelite',
        date_debut: 'Sept. 2025',
        date_fin: 'Présent',
        description: 'Alternance en cours, mise en œuvre de solutions Sharepoint pour des clients externes et internes.',
        type: 'professionnel'
      },
    ].reverse();
  }
}