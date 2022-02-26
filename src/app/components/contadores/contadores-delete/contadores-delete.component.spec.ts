import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadoresDeleteComponent } from './contadores-delete.component';

describe('ContadoresDeleteComponent', () => {
  let component: ContadoresDeleteComponent;
  let fixture: ComponentFixture<ContadoresDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadoresDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadoresDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
