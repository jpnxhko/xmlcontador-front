import { Component, OnInit } from '@angular/core';

import { Contadores } from '../contadores.model';
import { ContadoresService } from './../contadores.service';

@Component({
  selector: 'app-contadores-read',
  templateUrl: './contadores-read.component.html',
  styleUrls: ['./contadores-read.component.css']
})
export class ContadoresReadComponent implements OnInit {

  contadores: Contadores[] = [];
  displayedColumns = ['cpf','nome','contabilidade','email', 'acoes'];

  constructor(private contadoresService: ContadoresService) { }

  ngOnInit(): void {
    this.contadoresService.read().subscribe(contadores => {
      this.contadores = contadores;
      console.log(contadores)
    })
  }

}
