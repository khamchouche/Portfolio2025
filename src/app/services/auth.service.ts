// Fichier: src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, from, of, switchMap } from 'rxjs';
import { Auth, signInWithEmailAndPassword, signOut, User, onAuthStateChanged } from '@angular/fire/auth'; // ⬅️ Cette ligne est CRUCIALE
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User | null>;

  constructor(private auth: Auth, private router: Router) {
    // Écoute l'état de l'authentification Firebase
    this.user$ = new Observable(observer => {
      onAuthStateChanged(this.auth, user => {
        observer.next(user);
      });
    });
  }

  async login(email: string, password: string): Promise<void> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this.router.navigateByUrl('/admin'); 
    } catch (error) {
      throw error; 
    }
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
    this.router.navigateByUrl('/');
  }

  isLoggedIn(): Observable<boolean> {
    // Renvoie true si l'utilisateur est présent
    return this.user$.pipe(
      switchMap(user => of(!!user)) 
    );
  }
}