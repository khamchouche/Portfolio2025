import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencesComponent } from './competences';

describe('Competences', () => {
  let component: CompetencesComponent;
  let fixture: ComponentFixture<CompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetencesComponent);
    component = fixtureInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
