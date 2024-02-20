import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionInformationComponent } from './submission-information.component';

describe('SubmissionInformationComponent', () => {
  let component: SubmissionInformationComponent;
  let fixture: ComponentFixture<SubmissionInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmissionInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmissionInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
