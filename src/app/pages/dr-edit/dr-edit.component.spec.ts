import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrEditComponent } from './dr-edit.component';

describe('DrEditComponent', () => {
  let component: DrEditComponent;
  let fixture: ComponentFixture<DrEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
