import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenshopComponent } from './womenshop.component';

describe('WomenshopComponent', () => {
  let component: WomenshopComponent;
  let fixture: ComponentFixture<WomenshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
