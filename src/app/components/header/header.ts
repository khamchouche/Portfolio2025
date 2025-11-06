// Fichier: src/app/components/header/header.ts

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [RouterModule], 
  templateUrl: './header.html', 
  // 🛑 CORRECTION : Assurez-vous que le nom du fichier est bien 'header.scss'
  styleUrls: ['./header.scss'] 
})
export class HeaderComponent {
  // Pas de logique ici
}