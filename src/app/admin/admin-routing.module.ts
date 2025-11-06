// Fichier: src/app/admin/admin-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';

// Importez les composants CRUD
// import { ProjetsListComponent } from './projets/projets-list/projets-list';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent, // Chemin par défaut (ex: /admin)
    children: [
      // Routes enfants pour le CRUD
      // { path: 'projets', component: ProjetsListComponent, title: 'Gestion Projets' },
      // { path: 'experiences', component: ExperiencesListComponent, title: 'Gestion Expériences' },
      // { path: 'competences', component: CompetencesListComponent, title: 'Gestion Compétences' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }