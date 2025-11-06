// Fichier: src/app/admin/projets/projets-list/projets-list.ts

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { DataService } from '../../../services/data';
import { Projet } from '../../../models/projet';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projets-list',
    standalone: true, // ⬅️ AJOUT CRITIQUE
 imports: [RouterModule],
  templateUrl: './projets-list.html',
  styleUrls: ['./projets-list.scss']
})
export class ProjetsListComponent implements OnInit {
  projets$!: Observable<Projet[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Charger la liste des projets
    this.projets$ = this.dataService.getCollection('projets') as Observable<Projet[]>;
  }

  async deleteProjet(id: string | undefined): Promise<void> {
    if (id && confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
      try {
        await this.dataService.deleteDoc('projets', id);
      } catch (error) {
        console.error('Erreur lors de la suppression:', error);
        alert("Erreur lors de la suppression du document.");
      }
    }
  }
}