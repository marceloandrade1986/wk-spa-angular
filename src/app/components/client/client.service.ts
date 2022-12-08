import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Client } from './client.model';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = "http://127.0.0.1:8000/api/clients";

  constructor(private matSnackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.matSnackBar.open(msg, 'close', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, client)
  }

  read(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl);
  }

  readById(id: any): Observable<Client> {
    return this.http.get<Client>(this.baseUrl + '/' + id)
  }

  update(client: Client): Observable<Client> {
    return this.http.put<Client>(this.baseUrl + '/' + client.id, client)
  }

  delete(id: any) {
    return this.http.delete<Client>(this.baseUrl + '/' + id)
  }
}
