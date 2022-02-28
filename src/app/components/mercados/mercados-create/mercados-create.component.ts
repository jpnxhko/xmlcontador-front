import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mercados } from '../mercados.model';

import { MercadosService } from './../mercados.service';

@Component({
  selector: 'app-mercados-create',
  templateUrl: './mercados-create.component.html',
  styleUrls: ['./mercados-create.component.css']
})
export class MercadosCreateComponent implements OnInit {

  mercados: Mercados = {
    "cnpj": "",
    "nomeFantasia": "",
    "razaoSocial": "",
    "responsavel": ""
  }

  constructor(private mercadosService: MercadosService, private router: Router) { }

  ngOnInit(): void {
  }

  criarMercadoSnack(): void {
    this.mercadosService.create(this.mercados).subscribe(() => {
      this.mercadosService.showMessage('Mercado criado com sucesso!');
      this.router.navigate(['/mercados'])
    });
  }

  cancelarMercado(): void {
    this.router.navigate(['/mercados'])
  }
}
