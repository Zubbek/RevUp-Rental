import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclesComponent } from './motorcycles.component';

describe('MotorcyclesComponent', () => {
  let component: MotorcyclesComponent;
  let fixture: ComponentFixture<MotorcyclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorcyclesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotorcyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
