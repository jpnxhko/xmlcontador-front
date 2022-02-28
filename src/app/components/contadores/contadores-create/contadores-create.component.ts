import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContadoresService } from '../contadores.service';

@Component({
  selector: 'app-contadores-create',
  templateUrl: './contadores-create.component.html',
  styleUrls: ['./contadores-create.component.css']
})
export class ContadoresCreateComponent implements OnInit {

  constructor(private contadoresService: ContadoresService, private router: Router) { }

  ngOnInit(): void {
  }

  criarContadorSnack(): void {
    this.contadoresService.showMessage('Contador criado com sucesso!');
  }

  cancelarContador(): void {
    this.router.navigate(['/contadores'])
  }
}
