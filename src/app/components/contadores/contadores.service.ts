import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { catchError, EMPTY, map, Observable } from 'rxjs';

import { Contadores } from './contadores.model';

@Injectable({
  providedIn: 'root'
})
export class ContadoresService {

  baseUrl: string = "http://localhost:3001/contadores"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string, isError:boolean = false): void {
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: isError ? ['msg-error'] : ['msg-success']
      })
    }

    create(contadores: Contadores): Observable<Contadores> {
      return this.http.post<Contadores>(this.baseUrl, contadores).pipe(
        map((obj) => obj),
        catchError(e => this.errorHandler(e))
      );
    }

    read(): Observable<Contadores[]> {
      return this.http.get<Contadores[]>(this.baseUrl)
    }

    readById(id: string): Observable<Contadores> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.get<Contadores>(url)
    }

    edit(contadores: Contadores): Observable<Contadores> {
      const url = `${this.baseUrl}/${contadores.id}`;
      return this.http.put<Contadores>(url, contadores)
    }

    delete(contadores: Contadores): Observable<Contadores> {
      const url = `${this.baseUrl}/${contadores.id}`;
      return this.http.delete<Contadores>(url)
    }

    errorHandler(e: any): Observable<any> {
      return EMPTY;
    }
}
