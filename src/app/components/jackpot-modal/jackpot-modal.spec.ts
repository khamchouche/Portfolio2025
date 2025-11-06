import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackpotModal } from './jackpot-modal';

describe('JackpotModal', () => {
  let component: JackpotModal;
  let fixture: ComponentFixture<JackpotModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JackpotModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JackpotModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
