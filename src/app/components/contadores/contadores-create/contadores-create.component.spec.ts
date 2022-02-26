import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadoresCreateComponent } from './contadores-create.component';

describe('ContadoresCreateComponent', () => {
  let component: ContadoresCreateComponent;
  let fixture: ComponentFixture<ContadoresCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadoresCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadoresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
