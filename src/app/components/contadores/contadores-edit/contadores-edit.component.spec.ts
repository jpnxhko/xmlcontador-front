import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadoresEditComponent } from './contadores-edit.component';

describe('ContadoresEditComponent', () => {
  let component: ContadoresEditComponent;
  let fixture: ComponentFixture<ContadoresEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadoresEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadoresEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
