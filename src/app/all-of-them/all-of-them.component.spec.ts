import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOfThemComponent } from './all-of-them.component';

describe('AllOfThemComponent', () => {
  let component: AllOfThemComponent;
  let fixture: ComponentFixture<AllOfThemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOfThemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOfThemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
