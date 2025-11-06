// Fichier: src/app/admin/admin.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Module de formulaires essentiel

// Imports utilisant le nom de fichier simplifié (login.ts, dashboard.ts, etc.)
import { DashboardComponent } from './dashboard/dashboard'; 
import { LoginComponent } from './login/login'; 
import { ProjetsListComponent } from './projets/projets-list/projets-list';
import { ProjetEditComponent } from './projets/projet-edit/projet-edit';
import { ExperiencesListComponent } from './experiences/experiences-list/experiences-list';
import { ExperienceEditComponent } from './experiences/experience-edit/experience-edit';
import { CompetencesListComponent } from './competences/competences-list/competences-list';
import { CompetenceEditComponent } from './competences/competence-edit/competence-edit';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
 
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,          // ⬅️ Nécessaire pour [(ngModel)] dans le formulaire de login
    ReactiveFormsModule   // ⬅️ Nécessaire pour tous les formulaires d'édition (CRUD)
  ]
})
export class AdminModule { }