import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirAvisComponent } from './voir-avis.component';

describe('VoirAvisComponent', () => {
  let component: VoirAvisComponent;
  let fixture: ComponentFixture<VoirAvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoirAvisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoirAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
