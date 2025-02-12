import { Component } from '@angular/core';
import { AttractionService } from '../Service/attraction.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AttractionInterface } from '../Interface/attraction.interface';
import { MatCardModule } from '@angular/material/card';
import { AvisComponent } from '../avis/avis.component';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(public attractionService: AttractionService, private dialog: MatDialog) {}

  
  public attractions: Observable<AttractionInterface[]> = this.attractionService.getAllAttraction()

  openModal(attractionName: string) {
    const dialogRef = this.dialog.open(AvisComponent, {
      width: '500px',
      data: { attractionName },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(`Avis pour ${attractionName} :`, result);
        // Logique pour enregistrer l'avis si nécessaire
      }
    });
  }
}
