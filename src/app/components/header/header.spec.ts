// Fichier: src/app/components/header/header.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header'; // Ou './header' si vous utilisez le nom court

describe('HeaderComponent', () => {
  let component: HeaderComponent; // ⬅️ L'instance du composant
  let fixture: ComponentFixture<HeaderComponent>; // ⬅️ Le banc de test (fixture)

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Si le HeaderComponent est standalone, vous l'importez ici:
      imports: [HeaderComponent], 
      // Si vous utilisez une structure de module: declarations: [HeaderComponent]
    }).compileComponents();

    // 1. Création de la fixture (banc de test)
    fixture = TestBed.createComponent(HeaderComponent);
    
    // 2. Attribution de l'instance du composant
    component = fixture.componentInstance; 
    
    // Détection des changements initiaux
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Exemple de test
  it('should have working navigation links', () => {
    // Accéder au DOM via la fixture
    const compiled = fixture.nativeElement as HTMLElement; 
    // Assurez-vous que l'élément 'Mon Portfolio' est présent
    expect(compiled.querySelector('a.text-2xl')?.textContent).toContain('Mon Portfolio'); 
  });
});