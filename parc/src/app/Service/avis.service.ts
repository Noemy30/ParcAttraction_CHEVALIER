import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AvisInterface } from '../Interface/avis.interface';

@Injectable({
  providedIn: 'root',
})
export class AvisService {
  private baseUrl = 'http://127.0.0.1:5000/avis'; 

  constructor(private http: HttpClient) {}

  public getAvis(): Observable<AvisInterface[]> {
    return this.http.get<AvisInterface[]>(this.baseUrl);
  }

  public addAvis(avis: AvisInterface): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(this.baseUrl, avis);
  }
}
