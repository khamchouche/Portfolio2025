import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceEdit } from './competence-edit';

describe('CompetenceEdit', () => {
  let component: CompetenceEdit;
  let fixture: ComponentFixture<CompetenceEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetenceEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenceEdit);
    component = fixtureInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
