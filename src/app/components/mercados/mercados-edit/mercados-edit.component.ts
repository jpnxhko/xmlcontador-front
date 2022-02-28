import { MercadosService } from './../mercados.service';
import { Component, OnInit } from '@angular/core';
import { Mercados } from '../mercados.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mercados-edit',
  templateUrl: './mercados-edit.component.html',
  styleUrls: ['./mercados-edit.component.css']
})
export class MercadosEditComponent implements OnInit {

  mercados: Mercados = {
    "cnpj": "",
    "nomeFantasia": "",
    "razaoSocial": "",
    "responsavel": ""
  }

  constructor(private mercadosService: MercadosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.mercadosService.readById(<string>id).subscribe(mercados => {
      this.mercados = mercados
    });
  }

  alterarMercadoSnack(): void {
    this.mercadosService.edit(this.mercados).subscribe(() => {
      this.mercadosService.showMessage('Mercado alterado com sucesso!');
      this.router.navigate(['/mercados'])
    });
  }

  cancelarMercado(): void {
    this.router.navigate(['/mercados'])
  }
}
