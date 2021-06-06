import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisternameComponent } from './registername.component';

describe('RegisternameComponent', () => {
  let component: RegisternameComponent;
  let fixture: ComponentFixture<RegisternameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisternameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisternameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
