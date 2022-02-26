import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadosEditComponent } from './mercados-edit.component';

describe('MercadosEditComponent', () => {
  let component: MercadosEditComponent;
  let fixture: ComponentFixture<MercadosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadosEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
