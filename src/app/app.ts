import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
//import { HeaderComponent } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
 imports: [
    RouterOutlet, 
   // HeaderComponent, 
    CommonModule,
    RouterModule // ⬅️ AJOUTÉ POUR RECONNAÎTRE <router-outlet>
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio-angular';
  marioPosition: number = 0;

  @ViewChildren('marioStarLink') marioStarLinks!: QueryList<ElementRef>;

  constructor(private router: Router) {}

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
    setTimeout(() => { // Un petit délai pour s'assurer que les éléments sont rendus
      this.updateMarioPosition();
    }, 100);
  }

  updateMarioPosition(): void {
    const activeLink = this.marioStarLinks.find(link => 
        link.nativeElement.classList.contains('active')
    );

    if (activeLink) {
      const linkRect = activeLink.nativeElement.getBoundingClientRect();
      const headerRect = document.querySelector('.mario-header')?.getBoundingClientRect();

      if (headerRect) {
        // Calculer la position X de Mario au centre de l'étoile active
        // Par rapport au côté gauche du header
        this.marioPosition = linkRect.left + (linkRect.width / 2) - (headerRect.left) - 25; // -25 pour centrer Mario sur l'étoile
      }
    }
  }
}