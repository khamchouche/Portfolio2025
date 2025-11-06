// Fichier: src/app/admin/competences/competence-edit/competence-edit.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


import { take } from 'rxjs';
import { DataService } from '../../../services/data';
import { Competence } from '../../../models/competence';

@Component({
  selector: 'app-competence-edit',
    standalone: true, // ⬅️ AJOUT CRITIQUE POUR NG6008

  imports: [RouterModule],
  templateUrl: './competence-edit.html',
  styleUrls: ['./competence-edit.scss']
})
export class CompetenceEditComponent implements OnInit {
  competenceForm!: FormGroup;
  isEditMode: boolean = false;
  competenceId: string | null = null;
  isLoading: boolean = false;
  titrePage: string = 'Ajouter une nouvelle Compétence';
  
  // Options pour le champ 'type'
  types = [
    { value: 'technique', viewValue: 'Technique (Informatique)' },
    { value: 'douce', viewValue: 'Douce (Soft Skill)' }
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.competenceId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!this.competenceId;
    this.initForm();

    if (this.isEditMode && this.competenceId) {
      this.titrePage = 'Éditer la Compétence';
      this.loadCompetence(this.competenceId);
    }
  }

  initForm(): void {
    this.competenceForm = this.fb.group({
      nom: ['', Validators.required],
      type: ['', Validators.required],
      niveau: [null, [Validators.min(0), Validators.max(100)]] // Le niveau est optionnel
    });
  }

  loadCompetence(id: string): void {
    this.dataService.getDocById('competences', id).pipe(take(1)).subscribe(data => {
      if (data) {
        this.competenceForm.patchValue(data);
      } else {
        alert("Compétence non trouvée.");
        this.router.navigate(['/admin/competences']);
      }
    });
  }

  async onSubmit(): Promise<void> {
    if (this.competenceForm.invalid) {
      alert("Veuillez remplir tous les champs requis correctement.");
      return;
    }

    this.isLoading = true;
    const competenceData: Competence = this.competenceForm.value;

    try {
      if (this.isEditMode && this.competenceId) {
        await this.dataService.updateDoc('competences', this.competenceId, competenceData);
      } else {
        await this.dataService.addDoc('competences', competenceData);
      }
      this.router.navigate(['/admin/competences']);
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement:', error);
      alert('Erreur lors de l\'enregistrement de la compétence.');
    } finally {
      this.isLoading = false;
    }
  }

  get f() { return this.competenceForm.controls; }
}