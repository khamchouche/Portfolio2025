// Fichier: src/app/admin/login/login.ts

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true, // ⬅️ AJOUT CRITIQUE
  imports: [FormsModule], 
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private authService: AuthService) {}

  async login() {
    this.errorMessage = '';
    this.isLoading = true;

    try {
      await this.authService.login(this.email, this.password);
    } catch (error) {
      this.errorMessage = 'Erreur: Email ou mot de passe incorrect.';
      console.error('Login error details:', error);
    } finally {
      this.isLoading = false;
    }
  }
}