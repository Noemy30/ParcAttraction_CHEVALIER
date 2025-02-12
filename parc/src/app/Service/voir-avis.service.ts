import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AvisInterface } from '../Interface/avis.interface';

@Injectable({
  providedIn: 'root' 
})
export class VoirAvisService {
  private apiUrl = 'http://localhost:5000/avis'; 

  constructor(private http: HttpClient) {}

  getAvis(attractionId: string): Observable<AvisInterface[]> {
    return this.http.get<AvisInterface[]>(`${this.apiUrl}/${attractionId}`);
  }
}
