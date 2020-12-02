import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCompanyPageComponent } from './register-company-page.component';

describe('RegisterCompanyPageComponent', () => {
  let component: RegisterCompanyPageComponent;
  let fixture: ComponentFixture<RegisterCompanyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCompanyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCompanyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
