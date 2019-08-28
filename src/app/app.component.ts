import { Component } from '@angular/core';
import { ApiService } from './share/services/api.service';
import { Student } from './share/models/student';
import { StudentCollection } from './share/models/student-collection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public studentCollection: StudentCollection;

  public constructor(private api: ApiService){
    this.api.getAllStudents().subscribe((studentPoorList: any) => {
        const students: Array<any> = studentPoorList;

        // Euh Bulent, t'es sûr d'avoir des élèves ?
        if (!students.hasOwnProperty('httpStatus')){
          this.studentCollection = new StudentCollection();
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
}
