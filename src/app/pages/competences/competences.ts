// Fichier: src/app/pages/competences/competences.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 
import { SkillItem } from '../../models/competence-detail'; // Assurez-vous que le chemin est correct
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './competences.html',
  styleUrls: ['./competences.scss'],
  // DÉFINITION DES ANIMATIONS POUR L'EFFET DE GLISSEMENT
  animations: [
    trigger('slideInOut', [
      state('in', style({ height: '*', opacity: 1, padding: '15px 0' })),
      transition(':leave', [
        style({ height: '*', opacity: 1, padding: '15px 0' }),
        animate('300ms ease-in', style({ height: '0px', opacity: 0, padding: '0' }))
      ]),
      transition(':enter', [
        style({ height: '0px', opacity: 0, padding: '0' }),
        animate('300ms ease-out', style({ height: '*', opacity: 1, padding: '15px 0' }))
      ])
    ])
  ]
})
export class CompetencesComponent implements OnInit {
  
  allSkills: SkillItem[] = [];
  skillCategories: { title: string, isExpanded: boolean, type: string[] }[] = [];

  constructor() { }

  ngOnInit(): void {
    // 🛑 DONNÉES STRUCTURÉES MISES À JOUR (Focus sur Odoo, SharePoint, React)
    this.allSkills = [
      // --- LANGAGES ---
      { id: 'h1', nom: 'HTML / CSS / SCSS', type: 'langage', iconClass: 'fa-html5', project_link: '/projets/web-design', description: 'Base de l\'intégration et du style web, maîtrise du préprocesseur SCSS.' },
      { id: 'js', nom: 'JavaScript / TS', type: 'langage', iconClass: 'fa-js', project_link: '/projets/front-end', description: 'Logique client avancée et typage strict grâce à TypeScript.' },
      { id: 'php', nom: 'PHP', type: 'langage', iconClass: 'fa-php', project_link: '/projets/backend', description: 'Développement d\'applications côté serveur (API REST).' },
      { id: 'java', nom: 'Java', type: 'langage', iconClass: 'fa-java', project_link: '/projets/backend', description: 'Programmation orientée objet et développement de solutions robustes.' },
      { id: 'python', nom: 'Python', type: 'langage', iconClass: 'fa-python', project_link: '/projets/data', description: 'Utilisation pour le scripting et l\'automatisation de tâches.' },
      { id: 'cpp', nom: 'C++', type: 'langage', iconClass: 'fa-cuttlefish', project_link: '/projets/algorithmes', description: 'Fondamentaux de l\'algorithmique et performance.' },

      // --- FRAMEWORKS & ENVIRONNEMENTS ---
      { id: 'angular', nom: 'Angular', type: 'framework', iconClass: 'fa-angular', project_link: '/projets/front-end', description: 'Maîtrise du framework pour les SPAs et le développement d\'interfaces.' },
      { id: 'react', nom: 'React', type: 'framework', iconClass: 'fa-react', project_link: '/projets/front-end', description: 'Développement d\'interfaces utilisateur modernes basées sur des composants.' }, // ⬅️ AJOUTÉ
      { id: 'laravel', nom: 'Laravel', type: 'framework', iconClass: 'fa-laravel', project_link: '/projets/backend', description: 'Développement MVC côté serveur et gestion des ORM.' },
      { id: 'nodejs', nom: 'Node.js', type: 'framework', iconClass: 'fa-node-js', project_link: '/projets/backend', description: 'Environnement d\'exécution JavaScript asynchrone.' },
      { id: 'bootstrap', nom: 'Bootstrap', type: 'framework', iconClass: 'fa-bootstrap', description: 'Intégration rapide de design responsif et mobile-first.' },
      
      // --- ERP & OUTILS DE GESTION (Anciennement CMS) ---
      { id: 'odoo', nom: 'Odoo (ERP)', type: 'erp', iconClass: 'fa-odoo', description: 'Gestion de projets, modules et intégration PGI.' }, // ⬅️ AJOUTÉ
      { id: 'sharepoint', nom: 'SharePoint', type: 'erp', iconClass: 'fa-sharepoint', description: 'Intégration et gestion documentaire des Systèmes d\'Information.' }, // ⬅️ AJOUTÉ
      { id: 'git', nom: 'Git', type: 'outil', iconClass: 'fa-git-alt', description: 'Versionning avancé et gestion de branches avec GitFlow.' },
      { id: 'github', nom: 'GitHub', type: 'outil', iconClass: 'fa-github', description: 'Collaboration et gestion de dépôts en équipe.' },
      { id: 'excel', nom: 'Excel', type: 'outil', iconClass: 'fa-file-excel', description: 'Analyse et traitement de données basique.' },

      // --- BASES DE DONNÉES & BI ---
      { id: 'mysql', nom: 'MySQL / SQL/ No SQL', type: 'database', iconClass: 'fa-database', description: 'Conception de schémas (Merise/UML) et requêtes complexes.' },
      { id: 'powerbi', nom: 'Power BI', type: 'database', iconClass: 'fa-chart-bar', description: 'Outil de Business Intelligence et de visualisation.' },

      // --- MÉTHODOLOGIES & HUMAINES ---
      { id: 'agile', nom: 'Méthodologies Agiles (Scrum)', type: 'methodologie', description: 'Participation active aux sprints, estimation de tâches et rituels.' },
      { id: 'tdd', nom: 'Test Unitaire & TDD', type: 'methodologie', description: 'Approche orientée par les tests pour une haute qualité du code.' },
      { id: 'analyse', nom: 'Analyse des besoins', type: 'methodologie', description: 'Capacité à traduire des besoins fonctionnels en spécifications techniques claires.' },
      { id: 'equipe', nom: 'Travail d\'équipe', type: 'humaine', description: 'Collaboration efficace, écoute active et communication claire.' },
      { id: 'autonomie', nom: 'Autonomie', type: 'humaine', description: 'Gestion proactive des tâches et apprentissage autodidacte.' },
      { id: 'curiosite', nom: 'Curiosité', type: 'humaine', description: 'Veille technologique constante et exploration de nouvelles solutions.' },
      { id: 'problem', nom: 'Résolution de problèmes', type: 'humaine', description: 'Approche structurée et analytique des défis techniques.' },
      
      // --- LANGUES ---
      { id: 'fr', nom: 'Français', type: 'langue_parlee', detail: 'Langue maternelle', description: 'Communication fluide et professionnelle.' },
      { id: 'en', nom: 'Anglais', type: 'langue_parlee', detail: 'Courant (C1)', description: 'Niveau avancé pour la documentation technique.' },
      { id: 'ar', nom: 'Espagnol', type: 'langue_parlee', detail: 'Courant(C1)', description: 'Facilité de communication orale.' },
    ];

    // 🛑 INITIALISATION DES CATÉGORIES POUR L'ACCORDÉON (MIS À JOUR)
    this.skillCategories = [
      { title: 'LANGAGES', isExpanded: false, type: ['langage'] },
      { title: 'FRAMEWORKS & OUTILS', isExpanded: false, type: ['framework', 'outil'] },
      { title: 'ERP & GESTION SI', isExpanded: false, type: ['erp'] }, // ⬅️ NOUVELLE CATÉGORIE
      { title: 'BASES DE DONNÉES & BI', isExpanded: false, type: ['database'] }, 
      { title: 'MÉTHODOLOGIES', isExpanded: false, type: ['methodologie'] },
      { title: 'Compétences humaines', isExpanded: false, type: ['humaine'] },
    ];
  }
  
  getSkillsByType(types: string[]): SkillItem[] {
    return this.allSkills.filter(skill => types.includes(skill.type));
  }

  toggleCategory(category: { title: string, isExpanded: boolean, type: string[] }): void {
    // Fermer les autres catégories avant d'ouvrir la nouvelle
    this.skillCategories.forEach(c => {
      if (c !== category) {
        c.isExpanded = false;
      }
    });
    category.isExpanded = !category.isExpanded;
  }
  
  // 🛑 FONCTION CRITIQUE POUR GÉRER LES CLASSES FONT AWESOME
  getIconClasses(icon: string): { [key: string]: boolean } {
    const classes: { [key: string]: boolean } = {};
    if (icon.startsWith('fa-')) {
      // AJOUT DES NOUVEAUX TYPES (fa-odoo, fa-react, fa-sharepoint)
      const isBrand = ['fa-angular', 'fa-java', 'fa-php', 'fa-git-alt', 'fa-github', 'fa-node-js', 'fa-wordpress', 'fa-bootstrap', 'fa-js', 'fa-html5', 'fa-css3-alt', 'fa-python', 'fa-linkedin', 'fa-cuttlefish', 'fa-react', 'fa-odoo', 'fa-sharepoint'].includes(icon);
      
      classes[isBrand ? 'fa-brands' : 'fa-solid'] = true;
      classes[icon] = true;
    }
    return classes;
  }
}