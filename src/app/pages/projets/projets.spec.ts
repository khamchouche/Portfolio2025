import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Projets } from './projets';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // 👈 Indispensable
import { RouterTestingModule } from '@angular/router/testing';

describe('Projets', () => {
  let component: Projets;
  let fixture: ComponentFixture<Projets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Si Projets est standalone, on l'importe. Sinon, on le déclare.
      imports: [Projets, RouterTestingModule], 
      // 🛑 AJOUT DU SCHEMA ici aussi pour que le test accepte Swiper
      schemas: [CUSTOM_ELEMENTS_SCHEMA] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal when a project is selected', () => {
    const mockProjet = component.allProjets[0];
    component.openModal(mockProjet);
    expect(component.selectedProjet).toBe(mockProjet);
    expect(component.showModal).toBeTrue();
  });

  it('should close modal', () => {
    component.closeModal();
    expect(component.showModal).toBeFalse();
    expect(component.selectedProjet).toBeNull();
  });
});