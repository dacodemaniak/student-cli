import { Component } from '@angular/core';
import { ApiService } from './share/services/api.service';
import { Student } from './share/models/student';
import { StudentCollection } from './share/models/student-collection';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public studentCollection: StudentCollection;

  public constructor(
    private api: ApiService,
    private toastrService: ToastrService
  ){
    this.studentCollection = new StudentCollection(this.toastrService, api);

    this.api.getAllStudents().subscribe((studentPoorList: any) => {
        const students: Array<any> = studentPoorList;

        // Euh Bulent, t'es sûr d'avoir des élèves ?
        if (!students.hasOwnProperty('httpStatus')){
          
          students.forEach((student: any) => {
            let aStudent: Student = (new Student())
              .setId(student.id)
              .setNom(student.nom)
              .setPrenom(student.prenom)
              .setAdresse(student.adresse);
            // Vas-y JL, range moi ça dans le casier
            this.studentCollection.add(aStudent);
          });
        }
    });
  }

  /**
   * Removes the selected student
   */
  public removeStudent(student: Student): void {
    console.log('Have to kill ' + student.getId());
    this.studentCollection.remove(student.getId());
  }
}
