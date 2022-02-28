import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contadores } from './../contadores.model';

import { ContadoresService } from '../contadores.service';

@Component({
  selector: 'app-contadores-create',
  templateUrl: './contadores-create.component.html',
  styleUrls: ['./contadores-create.component.css']
})
export class ContadoresCreateComponent implements OnInit {

  contadores: Contadores = {
      "cpf": "",
      "nome": "",
      "contabilidade": "",
      "email": ""
  }

  constructor(private contadoresService: ContadoresService, private router: Router) { }

  ngOnInit(): void {
  }

  criarContadorSnack(): void {
    this.contadoresService.create(this.contadores).subscribe(() => {
      this.contadoresService.showMessage('Contador criado com sucesso!');
      this.router.navigate(['/contadores'])
    });
  }
  cancelarContador(): void {
    this.router.navigate(['/contadores'])
  }
}
