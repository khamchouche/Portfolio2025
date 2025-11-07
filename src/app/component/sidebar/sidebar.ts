// src/app/components/sidebar/sidebar.component.ts
import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent {
  activeSection: string = 'home'; // Définir la section active par défaut

  constructor(@Inject(DOCUMENT) private document: Document) { }

  scrollToSection(sectionId: string): void {
    const element = this.document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Écoute l'événement de défilement pour mettre à jour la section active
  @HostListener('window:scroll', ['$event'])
onScroll(event: Event): void {
    const scrollPosition = window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
  const sections = ['accueil', 'experiences', 'competences', 'projets', 'contact']; // ⬅️ Utilisez les IDs définis dans accueil.html

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = this.document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPosition + 100) { // +100px pour un léger décalage
        this.activeSection = sections[i];
        break;
      }
    }
  }
}