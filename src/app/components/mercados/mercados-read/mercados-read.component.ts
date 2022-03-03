import { Component, OnInit } from '@angular/core';

import { MercadosService } from './../mercados.service';
import { Mercados } from '../mercados.model';

@Component({
  selector: 'app-mercados-read',
  templateUrl: './mercados-read.component.html',
  styleUrls: ['./mercados-read.component.css']
})
export class MercadosReadComponent implements OnInit {

  mercados: Mercados[] = [];
  displayedColumns = ['id','cnpj','nomeFantasia','razaoSocial','responsavel', 'acoes'];

  constructor(private mercadosService: MercadosService) { }

  ngOnInit(): void {
    this.mercadosService.read().subscribe(mercados => {
      this.mercados = mercados;
      console.log(mercados)
    })
  }

}
