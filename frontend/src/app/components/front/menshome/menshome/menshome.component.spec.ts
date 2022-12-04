import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenshomeComponent } from './menshome.component';

describe('MenshomeComponent', () => {
  let component: MenshomeComponent;
  let fixture: ComponentFixture<MenshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenshomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
