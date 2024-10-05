import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormSectionComponent } from './contact-form-section.component';

describe('ContactFormSectionComponent', () => {
  let component: ContactFormSectionComponent;
  let fixture: ComponentFixture<ContactFormSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactFormSectionComponent]
    });
    fixture = TestBed.createComponent(ContactFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
