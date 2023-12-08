import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDialogComponent } from './signup-dialog.component';

describe('SignupComponentDialog', () => {
  let component: SignupDialogComponent;
  let fixture: ComponentFixture<SignupDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
