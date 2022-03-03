import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http'

import { catchError, EMPTY, map, Observable } from 'rxjs';

import { Mercados } from './mercados.model';

@Injectable({
  providedIn: 'root'
})
export class MercadosService {

  baseUrl = "http://localhost:3001/mercados"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string, isError: boolean = false): void {
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: isError ? ['msg-error'] : ['msg-success']
      })
    }

    create(mercados: Mercados): Observable<Mercados> {
      return this.http.post<Mercados>(this.baseUrl, mercados).pipe(
        map((obj) => obj),
        catchError(e => this.errorHandler(e))
      );
    }

    read(): Observable<Mercados[]> {
      return this.http.get<Mercados[]>(this.baseUrl)
    }

    readById(id: string): Observable<Mercados> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.get<Mercados>(url)
    }

    edit(mercados: Mercados): Observable<Mercados> {
      const url = `${this.baseUrl}/${mercados.id}`;
      return this.http.put<Mercados>(url, mercados)
    }

    delete(mercados: Mercados): Observable<Mercados> {
      const url = `${this.baseUrl}/${mercados.id}`;
      return this.http.delete<Mercados>(url)
    }

    errorHandler(e: any): Observable<any> {
      return EMPTY;
    }
  }
