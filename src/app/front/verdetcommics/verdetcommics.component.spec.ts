import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdetcommicsComponent } from './verdetcommics.component';

describe('VerdetcommicsComponent', () => {
  let component: VerdetcommicsComponent;
  let fixture: ComponentFixture<VerdetcommicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerdetcommicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerdetcommicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
