// Fichier: src/app/app.routes.ts

import { Routes } from '@angular/router';

// 🛑 Imports des composants publics (Vérifiez les chemins et les noms des fichiers !)


// Imports des composants de la zone administration
import { LoginComponent } from './admin/login/login'; // Utilisez login/login si vous avez le nommage court

import { AccueilComponent } from './pages/accueil/accueil';
import { Projets } from './pages/projets/projets';
import { Experiences } from './pages/experiences/experiences';
import { CompetencesComponent } from './pages/competences/competences';
import { Contact } from './pages/contact/contact';
import { AuthGuard } from '@angular/fire/auth-guard';

export const routes: Routes = [
  // Routes Publiques
  { path: '', component: AccueilComponent, title: 'Accueil' },
  { path: 'projets', component: Projets, title: 'Projets' },
  { path: 'experiences', component: Experiences, title: 'Expériences' },
  { path: 'competences', component: CompetencesComponent, title: 'Compétences' },
  { path: 'contact', component: Contact, title: 'Contact' },
  
  // Route de Connexion Secrète
  { path: 'securis-admin-login-2025', component: LoginComponent, title: 'Connexion Admin' },

  // Zone Administration (Chargement Paresseux du AdminModule)
  { 
    path: 'admin', 
    // Chargement paresseux de AdminModule (contient les routes des listes CRUD)
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), 
    canActivate: [AuthGuard] // Protection par le Guard
  },

  // Route de capture des erreurs (404)
  { path: '**', redirectTo: '' } 
];