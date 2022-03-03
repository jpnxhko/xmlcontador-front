import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ContadoresService } from './../contadores.service';
import { Contadores } from '../contadores.model';

@Component({
  selector: 'app-contadores-delete',
  templateUrl: './contadores-delete.component.html',
  styleUrls: ['./contadores-delete.component.css']
})
export class ContadoresDeleteComponent implements OnInit {

  contadores: Contadores = {
    "cpf": "",
    "nome": "",
    "contabilidade": "",
    "email": ""
  }

  constructor(
    private contadoresService: ContadoresService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contadoresService.readById(<string>id).subscribe(contadores => {
      this.contadores = contadores
    });
  }

  deletarContadorSnack(): void {
    this.contadoresService.delete(this.contadores).subscribe(() => {
      this.contadoresService.showMessage('Contador deletado com sucesso!');
      this.router.navigate(['/contadores'])
    });
  }

  cancelaContador(): void {
    this.router.navigate(['/contadores'])
  }
}
