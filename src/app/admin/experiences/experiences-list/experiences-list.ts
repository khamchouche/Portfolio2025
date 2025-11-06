// Fichier: src/app/admin/experiences/experiences-list/experiences-list.ts

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../../../models/experience';
import { DataService } from '../../../services/data';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-experiences-list',
    standalone: true, // ⬅️ AJOUT CRITIQUE
  imports: [FormsModule], 
  templateUrl: './experiences-list.html',
  styleUrls: ['./experiences-list.scss']
})
export class ExperiencesListComponent implements OnInit {
  experiences$!: Observable<Experience[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Charge la collection 'experiences'
    this.experiences$ = this.dataService.getCollection('experiences') as Observable<Experience[]>;
  }

  async deleteExperience(id: string | undefined): Promise<void> {
    if (id && confirm('Êtes-vous sûr de vouloir supprimer cette expérience ?')) {
      try {
        await this.dataService.deleteDoc('experiences', id);
      } catch (error) {
        console.error('Erreur lors de la suppression:', error);
        alert("Erreur lors de la suppression du document.");
      }
    }
  }
}