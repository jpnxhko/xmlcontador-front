import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadosCreateComponent } from './mercados-create.component';

describe('MercadosCreateComponent', () => {
  let component: MercadosCreateComponent;
  let fixture: ComponentFixture<MercadosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadosCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
