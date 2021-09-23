import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcompComponent } from './pcomp.component';

describe('PcompComponent', () => {
  let component: PcompComponent;
  let fixture: ComponentFixture<PcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
