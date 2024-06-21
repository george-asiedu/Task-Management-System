import { TestBed } from '@angular/core/testing';
import { SignupComponent } from './signup.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('SignupComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: of({}) },
          },
        },
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SignupComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});