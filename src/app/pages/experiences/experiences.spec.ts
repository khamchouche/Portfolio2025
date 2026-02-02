import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Experiences } from './experiences';

describe('Experiences', () => {
  let component: Experiences;
  let fixture: ComponentFixture<Experiences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Si Experiences est un composant standalone, "imports" est correct.
      // Sinon, utilise "declarations: [Experiences]".
      imports: [Experiences] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(Experiences);
    
    // 🛑 CORRECTION ICI : Remplacer fixtureInstance par fixture.componentInstance
    component = fixture.componentInstance; 
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});