// Fichier: src/app/admin/experiences/experience-edit/experience-edit.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { take } from 'rxjs';
import { DataService } from '../../../services/data';
import { Experience } from '../../../models/experience';

@Component({
  selector: 'app-experience-edit',
    standalone: true, // ⬅️ AJOUT CRITIQUE
  imports: [RouterModule], 
  templateUrl: './experience-edit.html',
  styleUrls: ['./experience-edit.scss']
})
export class ExperienceEditComponent implements OnInit {
  experienceForm!: FormGroup;
  isEditMode: boolean = false;
  experienceId: string | null = null;
  isLoading: boolean = false;
  titrePage: string = 'Ajouter une nouvelle Expérience';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.experienceId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!this.experienceId;
    this.initForm();

    if (this.isEditMode && this.experienceId) {
      this.titrePage = 'Éditer l\'Expérience';
      this.loadExperience(this.experienceId);
    }
  }

  initForm(): void {
    this.experienceForm = this.fb.group({
      titre: ['', Validators.required],
      entreprise: ['', Validators.required],
      date_debut: ['', Validators.required],
      date_fin: [''],
      description: ['', Validators.required]
    });
  }

  loadExperience(id: string): void {
    this.dataService.getDocById('experiences', id).pipe(take(1)).subscribe(data => {
      if (data) {
        // Formate les dates car les inputs de type 'date' attendent le format YYYY-MM-DD
        const formattedData = {
          ...data,
          date_debut: data['date_debut'] ? new Date(data['date_debut']).toISOString().substring(0, 10) : '',
          date_fin: data['date_fin'] ? new Date(data['date_fin']).toISOString().substring(0, 10) : ''
        };
        this.experienceForm.patchValue(formattedData);
      } else {
        alert("Expérience non trouvée.");
        this.router.navigate(['/admin/experiences']);
      }
    });
  }

  async onSubmit(): Promise<void> {
    if (this.experienceForm.invalid) {
      alert("Veuillez remplir tous les champs requis correctement.");
      return;
    }

    this.isLoading = true;
    const experienceData: Experience = this.experienceForm.value;

    try {
      if (this.isEditMode && this.experienceId) {
        await this.dataService.updateDoc('experiences', this.experienceId, experienceData);
      } else {
        await this.dataService.addDoc('experiences', experienceData);
      }
      this.router.navigate(['/admin/experiences']);
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement:', error);
      alert('Erreur lors de l\'enregistrement de l\'expérience.');
    } finally {
      this.isLoading = false;
    }
  }

  get f() { return this.experienceForm.controls; }
}