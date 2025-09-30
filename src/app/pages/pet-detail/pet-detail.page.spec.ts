import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetDetailPage } from './pet-detail.page';

describe('PetDetailPage', () => {
  let component: PetDetailPage;
  let fixture: ComponentFixture<PetDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
