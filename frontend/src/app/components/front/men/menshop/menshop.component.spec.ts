import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenshopComponent } from './menshop.component';

describe('MenshopComponent', () => {
  let component: MenshopComponent;
  let fixture: ComponentFixture<MenshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
