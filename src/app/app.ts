// Fichier: src/app/app.ts

import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

// 🛑 IMPORTS FONT AWESOME
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowRight, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { SidebarComponent } from './component/sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  // 🛑 AJOUT CRITIQUE : FontAwesomeModule
  imports: [
    RouterOutlet, 
    CommonModule, 
    RouterModule, 
    RouterLink, 
    RouterLinkActive, 
    FontAwesomeModule ,
    SidebarComponent// ⬅️ AJOUTÉ POUR LES ICÔNES
  ],
  templateUrl: './app.html', 
  styleUrls: ['./app.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  
  title = 'portfolio-angular';
  marioPosition: number = 0; // Position X en pixels pour le transform (déplacement de Mario)

  // Capture tous les liens de navigation (les étoiles)
  @ViewChildren('marioStarLink') marioStarLinks!: QueryList<ElementRef>; 

  // Injection du routeur et de la librairie d'icônes
  constructor(private router: Router, library: FaIconLibrary) {
      // 🛑 Initialisation des icônes pour Font Awesome
      library.addIcons(faTwitter, faFacebookF, faInstagram, faLinkedinIn, faGithub, faEnvelope, faArrowRight, faPhoneAlt);
 
    }

  ngOnInit(): void {
    // Écoute les changements de route pour déplacer Mario
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateMarioPosition();
    });
  }

  ngAfterViewInit(): void {
    // Met à jour la position au démarrage
    setTimeout(() => { 
      this.updateMarioPosition();
    }, 200);
  }

  updateMarioPosition(): void {
    const activeLink = this.marioStarLinks.find(link => 
        link.nativeElement.classList.contains('active')
    );

    if (activeLink) {
      const linkEl = activeLink.nativeElement as HTMLElement;
      const linkRect = linkEl.getBoundingClientRect();
      const headerRect = document.querySelector('.mario-header')?.getBoundingClientRect();

      if (headerRect) {
        // Calcul de la position X de Mario au centre de l'étoile active
        // -40px pour centrer Mario (largeur 80px)
        this.marioPosition = linkRect.left + (linkRect.width / 2) - (headerRect.left) - 40; 
      }
    }
  }
}