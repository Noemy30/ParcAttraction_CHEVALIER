import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AvisInterface } from '../Interface/avis.intercafe';
import { AvisService } from '../Service/avis.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
    MatInputModule,
    MatIconModule
  ] 
})
export class AvisComponent implements OnInit {
  public avisForm: FormGroup;
  public avisList: Observable<AvisInterface[]>;

  public stars = [1, 2, 3, 4, 5];

  constructor(private avisService: AvisService, private fb: FormBuilder) {
    this.avisForm = this.fb.group({
      texte: ['', Validators.required],
      note: [0, [Validators.required, Validators.min(1), Validators.max(5)]],
      nom: ['Anonyme'],
      prenom: ['Anonyme'],
    });

    this.avisList = this.avisService.getAvis();
  }

  ngOnInit(): void {}

 public submitAvis(): void {
  if (this.avisForm.valid) {
    this.avisService.addAvis(this.avisForm.value).subscribe(() => {
      this.avisList = this.avisService.getAvis(); // Recharge la liste des avis
      this.avisForm.reset({ nom: 'Anonyme', prenom: 'Anonyme', note: 0, texte: '' }); // Réinitialise le formulaire
    }, (error) => {
      console.error('Erreur lors de l\'ajout de l\'avis :', error);
    });
  }
}


  // Méthode pour définir la note
  public setRating(rating: number): void {
    this.avisForm.get('note')?.setValue(rating);
  }
}
