import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { Observable } from 'rxjs';
import { AvisInterface } from '../Interface/avis.interface';
import { VoirAvisService } from '../Service/voir-avis.service'; 

@Component({
  selector: 'app-voir-avis',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule
  ],
  templateUrl: './voir-avis.component.html',
  styleUrl: './voir-avis.component.scss'
})
export class VoirAvisComponent implements OnInit {
  avisList$: Observable<AvisInterface[]> = new Observable(); 

  constructor(
    private voirAvisService: VoirAvisService, 
    public dialogRef: MatDialogRef<VoirAvisComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string } 
  ) {}

  ngOnInit() {
    this.loadAvis();
  }

  loadAvis() {
    console.log(`Chargement des avis pour l'attraction : ${this.data.id}`); 
    this.avisList$ = this.voirAvisService.getAvis(this.data.id);
  }

  closeModal() {
    this.dialogRef.close();
  }
}
