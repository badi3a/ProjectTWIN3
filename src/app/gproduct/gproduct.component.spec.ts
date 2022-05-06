import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GproductComponent } from './gproduct.component';

describe('GproductComponent', () => {
  let component: GproductComponent;
  let fixture: ComponentFixture<GproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
