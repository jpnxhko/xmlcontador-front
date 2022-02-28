import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadosReadComponent } from './mercados-read.component';

describe('MercadosReadComponent', () => {
  let component: MercadosReadComponent;
  let fixture: ComponentFixture<MercadosReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadosReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadosReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
