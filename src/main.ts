// Fichier: src/main.ts (CODE CORRIGÉ)

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app'; // ⬅️ Importe votre composant racine 'App'
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // ⬅️ Importe vos définitions de routes

// Modules de services Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from './environments/environment'; // ⬅️ Assurez-vous que le chemin est correct
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    // Fournisseurs de Routage (Remplacement de AppRoutingModule)
    provideRouter(routes), 
    provideHttpClient(),
    // Fournisseurs Firebase
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    
    // Fournisseurs supplémentaires (pour les formulaires réactifs, etc.)
    // ...
  ]
}).catch(err => console.error(err));