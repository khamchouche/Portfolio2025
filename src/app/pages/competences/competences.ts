// Fichier: src/app/pages/competences/competences.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 
import { SkillItem } from '../../models/competence-detail'; 
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './competences.html',
  styleUrls: ['./competences.scss'],
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
    this.allSkills = [
      // --- LANGAGES ---
      { id: 'js', nom: 'JavaScript / TypeScript', type: 'langage', iconClass: 'fa-js', description: 'Logique client avancée et typage strict pour des applications robustes.' },
      { id: 'python', nom: 'Python', type: 'langage', iconClass: 'fa-python', description: 'Langage pilier pour la Data Science et l\'IA (LangChain, Automatisation).' },
      { id: 'ps', nom: 'PowerShell', type: 'langage', iconClass: 'fa-terminal', description: 'Scripting et automatisation de l\'administration système et cloud.' }, // ⬅️ AJOUTÉ
      { id: 'php', nom: 'PHP', type: 'langage', iconClass: 'fa-php', description: 'Développement d\'applications côté serveur et API REST.' },
      { id: 'java', nom: 'Java', type: 'langage', iconClass: 'fa-java', description: 'Programmation orientée objet pour solutions d\'entreprise.' },

      // --- IA & DATA SCIENCE ---
      { id: 'langchain', nom: 'LangChain', type: 'ai', iconClass: 'fa-link', description: 'Développement d\'applications pilotées par les LLM (RAG, Agents IA).' }, // ⬅️ AJOUTÉ
       { id: 'mangoDB', nom: 'mangoDB', type: 'database', iconClass: 'fa-database', description: 'Développement d\'applications pilotées par les LLM (RAG, Agents IA).' }, // ⬅️ AJOUTÉ
      { id: 'powerbi', nom: 'Power BI', type: 'database', iconClass: 'fa-chart-bar', description: 'Business Intelligence : Visualisation de données et création de dashboards décisionnels.' },
      { id: 'mysql', nom: 'MySQL / NoSQL', type: 'database', iconClass: 'fa-database', description: 'Conception de schémas et gestion de bases de données relationnelles et documentaires.' },

      // --- FRAMEWORKS & LOW-CODE ---
      { id: 'angular', nom: 'Angular', type: 'framework', iconClass: 'fa-angular', description: 'Framework principal pour la création d\'interfaces d\'entreprise complexes.' },
      { id: 'papps', nom: 'Power Apps', type: 'framework', iconClass: 'fa-apps', description: 'Développement rapide d\'applications métiers Low-Code.' }, // ⬅️ AJOUTÉ
      { id: 'pauto', nom: 'Power Automate', type: 'framework', iconClass: 'fa-robot', description: 'Automatisation des workflows et des processus métier.' }, // ⬅️ AJOUTÉ
      { id: 'react', nom: 'React', type: 'framework', iconClass: 'fa-react', description: 'Création d\'interfaces UI modernes et modulaires.' },

      // --- ERP & SOLUTIONS SI ---
      { id: 'odoo', nom: 'Odoo (ERP)', type: 'erp', iconClass: 'fa-odoo', description: 'Personnalisation et intégration de modules de gestion intégrés.' }, 
      { id: 'sharepoint', nom: 'SharePoint', type: 'erp', iconClass: 'fa-microsoft', description: 'Gestion documentaire (GED) et portails collaboratifs en entreprise.' }, 
      { id: 'wp', nom: 'WordPress', type: 'erp', iconClass: 'fa-wordpress', description: 'Gestion de contenu et déploiement rapide de solutions web.' },

      // --- MÉTHODOLOGIES & RESPONSABILITÉ ---
      { id: 'greenit', nom: 'Green IT', type: 'methodologie', iconClass: 'fa-leaf', description: 'Éco-conception logicielle pour réduire l\'empreinte environnementale du numérique.' }, // ⬅️ AJOUTÉ
      { id: 'agile', nom: 'Agile (Scrum)', type: 'methodologie', iconClass: 'fa-users-gear', description: 'Gestion de projet itérative et collaboration d\'équipe.' },
      
      // --- LANGUES ---
      { id: 'fr', nom: 'Français', type: 'langue_parlee', detail: 'Maternel',description:'' },
      { id: 'en', nom: 'Anglais', type: 'langue_parlee', detail: 'Avancé (Documentation technique)',description:''  }
    ];

    this.skillCategories = [
      { title: 'IA & DATA SCIENCE', isExpanded: false, type: ['ai', 'database'] },
      { title: 'LANGAGES & SCRIPTING', isExpanded: false, type: ['langage'] },
      { title: 'FRAMEWORKS & LOW-CODE', isExpanded: false, type: ['framework'] },
      { title: 'SOLUTIONS SI (ERP/CMS)', isExpanded: false, type: ['erp'] },
      { title: 'MÉTHODOLOGIES & GREEN IT', isExpanded: false, type: ['methodologie'] },
      { title: 'LANGUES', isExpanded: false, type: ['langue_parlee'] }
    ];
  }

  getSkillsByType(types: string[]): SkillItem[] {
    return this.allSkills.filter(skill => types.includes(skill.type));
  }

  toggleCategory(category: any): void {
    this.skillCategories.forEach(c => {
      if (c !== category) c.isExpanded = false;
    });
    category.isExpanded = !category.isExpanded;
  }

  getIconClasses(icon: string): { [key: string]: boolean } {
    const classes: { [key: string]: boolean } = {};
    if (icon.startsWith('fa-')) {
      const isBrand = [
        'fa-angular', 'fa-java', 'fa-php', 'fa-git-alt', 'fa-github', 
        'fa-node-js', 'fa-wordpress', 'fa-bootstrap', 'fa-js', 
        'fa-html5', 'fa-python', 'fa-react', 'fa-microsoft'
      ].includes(icon);
      
      classes[isBrand ? 'fa-brands' : 'fa-solid'] = true;
      classes[icon] = true;
    }
    return classes;
  }
}