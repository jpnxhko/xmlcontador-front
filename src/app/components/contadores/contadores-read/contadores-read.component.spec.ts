import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadoresReadComponent } from './contadores-read.component';

describe('ContadoresReadComponent', () => {
  let component: ContadoresReadComponent;
  let fixture: ComponentFixture<ContadoresReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadoresReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadoresReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
