import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaregiverDetailPage } from './caregiver-detail.page';

describe('CaregiverDetailPage', () => {
  let component: CaregiverDetailPage;
  let fixture: ComponentFixture<CaregiverDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregiverDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
