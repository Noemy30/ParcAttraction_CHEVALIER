import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // ✅ Ajout de HttpClient

@Component({
  selector: 'app-avis',
  standalone: true,
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    HttpClientModule // ✅ Nécessaire uniquement si c'est un composant standalone
  ],
})
export class AvisComponent {
  avisForm: FormGroup;
  stars = [1, 2, 3, 4, 5];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient, // ✅ Injection correcte de HttpClient
    private dialogRef: MatDialogRef<AvisComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { attractionName: string }
  ) {
    this.avisForm = this.fb.group({
      anonyme: [false],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      note: [0, Validators.required],
      texte: ['', Validators.required],
    });
  }

  toggleAnonyme() {
    const isAnonyme = this.avisForm.get('anonyme')?.value;
  
    if (isAnonyme) {
      this.avisForm.patchValue({ nom: '', prenom: '' });
      this.avisForm.get('nom')?.clearValidators();
      this.avisForm.get('prenom')?.clearValidators();
    } else {
      this.avisForm.get('nom')?.setValidators(Validators.required);
      this.avisForm.get('prenom')?.setValidators(Validators.required);
    }

    this.avisForm.get('nom')?.updateValueAndValidity();
    this.avisForm.get('prenom')?.updateValueAndValidity();
  }

  setRating(rating: number) {
    this.avisForm.patchValue({ note: rating });
  }

  submitAvis() {
    if (this.avisForm.valid) {
      const avisData = {
        ...this.avisForm.value,
        attraction_name: this.data.attractionName
      };
  
      console.log('Données envoyées à l’API :', avisData); // ✅ Vérification des données
  
      this.http.post('http://localhost:5000/avis', avisData).subscribe({
        next: () => {
          console.log('Avis envoyé avec succès');
          this.dialogRef.close(avisData);
        },
        error: (err) => console.error('Erreur lors de l\'envoi de l\'avis :', err)
      });
    } else {
      console.log('Le formulaire est invalide.');
    }
  }
  
  closeDialog() {
    this.dialogRef.close();
  }
}
