import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendaPageComponent } from './aprenda-page.component';

describe('AprendaPageComponent', () => {
  let component: AprendaPageComponent;
  let fixture: ComponentFixture<AprendaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprendaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprendaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
