// Fichier: src/app/admin/dashboard/dashboard.ts

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true, // ⬅️ AJOUT CRITIQUE POUR NG6008

  imports: [RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {

  constructor(private authService: AuthService) { }

  async logout() {
    try {
      await this.authService.logout();
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      alert('Échec de la déconnexion.');
    }
  }
}