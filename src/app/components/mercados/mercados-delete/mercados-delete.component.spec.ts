import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadosDeleteComponent } from './mercados-delete.component';

describe('MercadosDeleteComponent', () => {
  let component: MercadosDeleteComponent;
  let fixture: ComponentFixture<MercadosDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadosDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
