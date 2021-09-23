import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaaCompComponent } from './aaa-comp.component';

describe('AaaCompComponent', () => {
  let component: AaaCompComponent;
  let fixture: ComponentFixture<AaaCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaaCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AaaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
