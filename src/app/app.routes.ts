// Fichier: src/app/app.routes.ts

import { Routes } from '@angular/router';


// Imports des composants de la zone administration

import { AccueilComponent } from './pages/accueil/accueil';
import { Projets } from './pages/projets/projets';
import { Experiences } from './pages/experiences/experiences';
import { CompetencesComponent } from './pages/competences/competences';
import { ContactComponent } from './pages/contact/contact';


export const routes: Routes = [
  // Routes Publiques
  { path: '', component: AccueilComponent, title: 'Accueil' },
  { path: 'projets', component: Projets, title: 'Projets' },
  { path: 'experiences', component: Experiences, title: 'Expériences' },
  { path: 'competences', component: CompetencesComponent, title: 'Compétences' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },



  // Route de capture des erreurs (404)
  { path: '**', redirectTo: '' } 
];