import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mercados',
  templateUrl: './mercados.component.html',
  styleUrls: ['./mercados.component.css']
})
export class MercadosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  criarMercadoRota(): void {
    this.router.navigate(['/mercados/create'])
  }
}
