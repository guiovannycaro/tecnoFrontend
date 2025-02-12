import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdetgenerosComponent } from './verdetgeneros.component';

describe('VerdetgenerosComponent', () => {
  let component: VerdetgenerosComponent;
  let fixture: ComponentFixture<VerdetgenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerdetgenerosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerdetgenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
