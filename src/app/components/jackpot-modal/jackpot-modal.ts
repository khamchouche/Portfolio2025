// Fichier: src/app/components/jackpot-modal/jackpot-modal.component.ts

import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jackpot-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jackpot-modal.html',
  styleUrls: ['./jackpot-modal.scss']
})
export class JackpotModalComponent {
  
  @Output() close = new EventEmitter<void>();
  @Output() download = new EventEmitter<void>(); // ⬅️ Événement pour le téléchargement

  downloadCV(): void {
    this.download.emit(); // Déclenche la méthode de téléchargement dans le parent (AccueilComponent)
    this.close.emit(); // Ferme la modale
  }
}