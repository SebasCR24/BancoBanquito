import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionCargoComponent } from './distribucion-cargo.component';

describe('DistribucionCargoComponent', () => {
  let component: DistribucionCargoComponent;
  let fixture: ComponentFixture<DistribucionCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistribucionCargoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistribucionCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
