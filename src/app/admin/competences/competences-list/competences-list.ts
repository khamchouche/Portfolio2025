// Fichier: src/app/admin/competences/competences-list/competences-list.ts

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../../services/data';
import { Competence } from '../../../models/competence';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-competences-list',
    standalone: true, // ⬅️ AJOUT CRITIQUE POUR NG6008

  imports: [RouterModule],
  templateUrl: './competences-list.html',
  styleUrls: ['./competences-list.scss']
})
export class CompetencesListComponent implements OnInit {
  competences$!: Observable<Competence[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Charge la collection 'competences'
    this.competences$ = this.dataService.getCollection('competences') as Observable<Competence[]>;
  }

  async deleteCompetence(id: string | undefined): Promise<void> {
    if (id && confirm('Êtes-vous sûr de vouloir supprimer cette compétence ?')) {
      try {
        await this.dataService.deleteDoc('competences', id);
      } catch (error) {
        console.error('Erreur lors de la suppression:', error);
        alert("Erreur lors de la suppression du document.");
      }
    }
  }
}