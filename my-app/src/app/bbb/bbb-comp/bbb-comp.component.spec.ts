import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbbCompComponent } from './bbb-comp.component';

describe('BbbCompComponent', () => {
  let component: BbbCompComponent;
  let fixture: ComponentFixture<BbbCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbbCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BbbCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
