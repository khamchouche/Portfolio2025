// Fichier: src/app/pages/competences/competences.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Assurez-vous d'importer RouterLink si vous l'utilisez
import { SkillItem } from '../../models/competence-detail'; // Nous n'utiliserons plus SkillCategory ici

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './competences.html',
  styleUrls: ['./competences.scss']
})
export class CompetencesComponent implements OnInit {
  
  // 🛑 NOUVELLE STRUCTURE : Une liste plate de tous les SkillItem
  allSkills: SkillItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.allSkills = [
      // --- LANGAGES ---
      { id: 'h1', nom: 'HTML / CSS / SCSS', type: 'langage', logo_url: 'assets/html.png' },
      { id: 'js', nom: 'JavaScript / TypeScript', type: 'langage', logo_url: 'assets/javascriptpng.png' },
      { id: 'php', nom: 'PHP', type: 'langage', logo_url: 'assets/php.png' },
      { id: 'java', nom: 'Java', type: 'langage', logo_url: 'assets/java.png' },
      { id: 'python', nom: 'Python', type: 'langage', logo_url: 'assets/python.png' },
      { id: 'cpp', nom: 'C++', type: 'langage', logo_url: 'assets/c++.png' },
      
      // --- FRAMEWORKS & ENVIRONNEMENTS ---
      { id: 'angular', nom: 'Angular', type: 'framework', logo_url: 'assets/angular.png' },
      { id: 'laravel', nom: 'Laravel', type: 'framework', logo_url: 'assets/laravel.png' },
      { id: 'nodejs', nom: 'Node.js', type: 'framework', logo_url: 'assets/nodejs.png' },
      { id: 'git', nom: 'Git', type: 'outil', logo_url: 'assets/logos/git.png' },
      { id: 'github', nom: 'GitHub', type: 'outil', logo_url: 'assets/logos/github.png' },
      { id: 'wordpress', nom: 'WordPress', type: 'outil', logo_url: 'assets/logos/wordpress.png' },
      { id: 'bootstrap', nom: 'Bootstrap', type: 'framework', logo_url: 'assets/bootstrap.png' },

      // --- BASES DE DONNÉES & BI ---
      { id: 'mysql', nom: 'MySQL / SQL/ No SQL', type: 'database', logo_url: 'assets/database.png' },
      { id: 'powerbi', nom: 'Power BI', type: 'database', logo_url: 'assets/powerbi.png' },
      { id: 'excel', nom: 'Excel', type: 'outil', logo_url: 'assets/logos/excel.png' },

      // --- MÉTHODOLOGIES & HUMAINES ---
      { id: 'agile', nom: 'Méthodologies Agiles (Scrum)', type: 'methodologie' },
      { id: 'tdd', nom: 'Test Unitaire & TDD', type: 'methodologie' },
      { id: 'analyse', nom: 'Analyse des besoins', type: 'methodologie' },
      { id: 'equipe', nom: 'Travail d\'équipe', type: 'humaine' },
      { id: 'autonomie', nom: 'Autonomie', type: 'humaine' },
      { id: 'curiosite', nom: 'Curiosité', type: 'humaine' },
      { id: 'problem', nom: 'Résolution de problèmes', type: 'humaine' },
      
      // --- LANGUES (Ajout manuel ici pour l'exemple) ---
      { id: 'fr', nom: 'Français', type: 'langue_parlee', detail: 'Langue maternelle' },
      { id: 'en', nom: 'Anglais', type: 'langue_parlee', detail: 'Courant (C1)' },
      { id: 'ar', nom: 'Arabe (Marocain)', type: 'langue_parlee', detail: 'Langue maternelle' },
    ];
  }
  
  // Nouvelle fonction pour filtrer les compétences par type
  getSkillsByType(type: string): SkillItem[] {
    return this.allSkills.filter(skill => skill.type === type);
  }

getIconClasses(icon: string): { [key: string]: boolean } {
    const classes: { [key: string]: boolean } = {};
    if (icon.startsWith('fa-')) {
      // Détermine si c'est une icône de marque (fa-brands) ou une icône solide/standard (fa-solid)
      if (icon === 'fa-angular' || icon === 'fa-java' || icon === 'fa-php' || icon === 'fa-git-alt' || icon === 'fa-docker' || icon === 'fa-node-js' || icon === 'fa-linkedin') {
        classes['fa-brands'] = true;
      } else {
        // Pour les autres icônes (comme fa-database, fa-solid)
        classes['fa-solid'] = true;
      }
      classes[icon] = true; // Ajoute la classe spécifique de l'icône
    }
    return classes;
  }
}