import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrAddComponent } from './dr-add.component';

describe('DrAddComponent', () => {
  let component: DrAddComponent;
  let fixture: ComponentFixture<DrAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
