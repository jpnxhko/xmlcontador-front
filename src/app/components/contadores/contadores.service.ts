import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Contadores } from './contadores.model';

@Injectable({
  providedIn: 'root'
})
export class ContadoresService {

  baseUrl = "http://localhost:3001/contadores"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string): void {
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
      })
    }

    create(contadores: Contadores): Observable<Contadores> {
      return this.http.post<Contadores>(this.baseUrl, contadores)
    }
}
