import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesList } from './experiences-list';

describe('ExperiencesList', () => {
  let component: ExperiencesList;
  let fixture: ComponentFixture<ExperiencesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencesList);
    component = fixtureInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
