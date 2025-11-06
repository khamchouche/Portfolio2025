import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencesList } from './competences-list';

describe('CompetencesList', () => {
  let component: CompetencesList;
  let fixture: ComponentFixture<CompetencesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetencesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetencesList);
    component = fixtureInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
