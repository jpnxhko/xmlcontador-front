import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Mercados } from './mercados.model';

@Injectable({
  providedIn: 'root'
})
export class MercadosService {

  baseUrl = "http://localhost:3001/mercados"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string): void {
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
      })
    }

    create(mercados: Mercados): Observable<Mercados> {
      return this.http.post<Mercados>(this.baseUrl, mercados)
    }
}
