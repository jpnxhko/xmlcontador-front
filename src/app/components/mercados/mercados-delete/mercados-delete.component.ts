import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { MercadosService } from './../mercados.service';
import { Mercados } from '../mercados.model';

@Component({
  selector: 'app-mercados-delete',
  templateUrl: './mercados-delete.component.html',
  styleUrls: ['./mercados-delete.component.css']
})
export class MercadosDeleteComponent implements OnInit {

  mercados: Mercados = {
    "cnpj": "",
    "nomeFantasia": "",
    "razaoSocial": "",
    "responsavel": ""
  }

  constructor(
    private mercadosService: MercadosService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.mercadosService.readById(<string>id).subscribe(mercados => {
      this.mercados = mercados
    });
  }

  deletarMercadoSnack(): void {
    this.mercadosService.delete(this.mercados).subscribe(() => {
      this.mercadosService.showMessage('Mercado deletado com sucesso!');
      this.router.navigate(['/mercados'])
    });
  }

  cancelarMercado(): void {
    this.router.navigate(['/mercados'])
  }
}
