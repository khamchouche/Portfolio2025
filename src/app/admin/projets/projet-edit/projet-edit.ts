// Fichier: src/app/admin/projets/projet-edit/projet-edit.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { take } from 'rxjs';
import { DataService } from '../../../services/data';
import { Projet } from '../../../models/projet';

@Component({
  selector: 'app-projet-edit',
    standalone: true, // ⬅️ AJOUT CRITIQUE
imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './projet-edit.html',
  styleUrls: ['./projet-edit.scss']
})
export class ProjetEditComponent implements OnInit {
  projetForm!: FormGroup;
  isEditMode: boolean = false;
  projetId: string | null = null;
  isLoading: boolean = false;
  titrePage: string = 'Ajouter un nouveau Projet';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.projetId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!this.projetId;
    this.initForm();

    if (this.isEditMode && this.projetId) {
      this.titrePage = 'Éditer le Projet';
      this.loadProjet(this.projetId);
    }
  }

  initForm(): void {
    this.projetForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      url: ['', [Validators.required, Validators.pattern('https?://.+')]],
      chemin_image: ['']
    });
  }

  loadProjet(id: string): void {
    this.dataService.getDocById('projets', id).pipe(take(1)).subscribe(data => {
      if (data) {
        this.projetForm.patchValue(data);
      } else {
        alert("Projet non trouvé.");
        this.router.navigate(['/admin/projets']);
      }
    });
  }

  async onSubmit(): Promise<void> {
    if (this.projetForm.invalid) {
      alert("Veuillez remplir tous les champs requis correctement.");
      return;
    }

    this.isLoading = true;
    const projetData: Projet = this.projetForm.value;

    try {
      if (this.isEditMode && this.projetId) {
        await this.dataService.updateDoc('projets', this.projetId, projetData);
      } else {
        await this.dataService.addDoc('projets', projetData);
      }
      this.router.navigate(['/admin/projets']);
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement:', error);
      alert('Erreur lors de l\'enregistrement du projet.');
    } finally {
      this.isLoading = false;
    }
  }

  get f() { return this.projetForm.controls; }
}