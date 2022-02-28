import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MercadosService } from './../mercados.service';

@Component({
  selector: 'app-mercados-create',
  templateUrl: './mercados-create.component.html',
  styleUrls: ['./mercados-create.component.css']
})
export class MercadosCreateComponent implements OnInit {

  constructor(private mercadosService: MercadosService, private router: Router) { }

  ngOnInit(): void {
  }

  criarMercadoSnack(): void {
    this.mercadosService.showMessage('Mercado criado com sucesso!');
  }

  cancelarMercado(): void {
    this.router.navigate(['/mercados'])
  }
}
