import { Component } from '@angular/core';
import { AttractionService } from '../Service/attraction.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs'; 
import { AttractionInterface } from '../Interface/attraction.interface';
import { MatCardModule } from '@angular/material/card';
import { AvisComponent } from '../avis/avis.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http'; 
import { VoirAvisComponent } from '../voir-avis/voir-avis.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class AccueilComponent {

  public attractions: Observable<AttractionInterface[]> = this.attractionService.getAllAttraction();
  attractions$: Observable<any[]> = new Observable();

  constructor(
    public attractionService: AttractionService,
    private dialog: MatDialog,
    private http: HttpClient 
  ) {}

  openModal(attractionName: string) {
    const dialogRef = this.dialog.open(AvisComponent, {
      width: '500px',
      data: { attractionName },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(`Avis pour ${attractionName} :`, result);
      }
    });
  }


  openAvisModal(attractionName: number | null) {
    console.log(`Ouverture de la modale pour : ${attractionName}`);
  
    const dialogRef = this.dialog.open(VoirAvisComponent, {
      width: '500px',
      data: { id: attractionName },
    });
  
    dialogRef.afterClosed().subscribe(() => {
      console.log(`Modale fermée pour ${attractionName}`);
    });
  }
  
}
