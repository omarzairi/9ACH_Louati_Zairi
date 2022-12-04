import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenshomeComponent } from './womenshome.component';

describe('WomenshomeComponent', () => {
  let component: WomenshomeComponent;
  let fixture: ComponentFixture<WomenshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenshomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
