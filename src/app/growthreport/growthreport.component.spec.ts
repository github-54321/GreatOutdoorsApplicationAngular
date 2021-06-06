import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthreportComponent } from './growthreport.component';

describe('GrowthreportComponent', () => {
  let component: GrowthreportComponent;
  let fixture: ComponentFixture<GrowthreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowthreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
