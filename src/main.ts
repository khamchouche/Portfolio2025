// Fichier: src/main.ts (Nettoyage des imports Modules/JIT)

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router'; 
import { routes } from './app/app.routes'; 

import 'aos/dist/aos.css';
import { AppComponent } from './app/app'; // ⬅️ Utiliser AppComponent pour le bootstrap
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Imports Firebase (Fournisseurs)
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from './environments/environment'; 

// Importez AOS si vous l'utilisez, sinon Angular plantera :
import AOS from 'aos'; // Si AOS est installé via npm
AOS.init({ duration: 800, once: true }); // Initialisation de l'animation au scroll


bootstrapApplication(AppComponent, { // ⬅️ Bootstrap en mode Standalone
  providers: [
    provideRouter(routes), 
    provideHttpClient(),
    provideAnimationsAsync(),
    
    // Initialisation Firebase
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    
    // Si vous avez d'autres providers comme FormBuilder, ajoutez-les ici.
  ]
}).catch(err => console.error(err));