import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ContadoresService } from './../contadores.service';
import { Contadores } from '../contadores.model';

@Component({
  selector: 'app-contadores-edit',
  templateUrl: './contadores-edit.component.html',
  styleUrls: ['./contadores-edit.component.css']
})
export class ContadoresEditComponent implements OnInit {

  contadores: Contadores = {
    "cpf": "",
    "nome": "",
    "contabilidade": "",
    "email": ""
}

  constructor(private contadoresService: ContadoresService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contadoresService.readById(<string>id).subscribe(contadores => {
      this.contadores = contadores
    });
  }

  alterarContadorSnack(): void {
    this.contadoresService.edit(this.contadores).subscribe(() => {
      this.contadoresService.showMessage('Contador alterado com sucesso!');
      this.router.navigate(['/contadores'])
    });
  }

  cancelarContador(): void {
    this.router.navigate(['/contadores'])
  }
}
