import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contadores',
  templateUrl: './contadores.component.html',
  styleUrls: ['./contadores.component.css']
})
export class ContadoresComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  criarContador(): void {
    this.router.navigate(['/contadores/create']);
  }
}
