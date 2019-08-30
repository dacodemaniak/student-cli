import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/share/models/student';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ApiService } from 'src/app/share/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  private student: Student;
  private studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) { }

  public get nom(): AbstractControl {
    return this.studentForm.controls.nom;
  }

  public get prenom(): AbstractControl {
    return this.studentForm.controls.prenom;
  }

  public get adresse(): AbstractControl {
    return this.studentForm.controls.adresse;
  }
  ngOnInit() {
    this.student = new Student();

    this.studentForm = this.fb.group(
      {
        nom: [
          '', // Valeur par défaut du contrôle
          Validators.compose( // Plusieurs validateurs
            [
              Validators.required, 
              Validators.minLength(5)
            ]
          )
        ],

        prenom: ['', Validators.required],

        adresse: ['', Validators.required]
      }
    );

  }

  public add() {
    // TODO : Loop over the controls to check white spaces

    this.student
      .setNom(this.nom.value)
      .setPrenom(this.prenom.value)
      .setAdresse(this.adresse.value);

    // From the fresh new student, just persist it
    this.api.add(this.student).subscribe(() => {
      this.router.navigate(['']);
    }, (error) => {
      // Something went wrong... Do the stuff here
    });
  }
}
