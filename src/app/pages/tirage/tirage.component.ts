import { Component, OnInit } from '@angular/core';
import { ListeAbsentsService } from 'src/app/services/liste-absents.service';
import { STUDENTS, Students } from 'src/app/components/mocks/classmates.mock';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent implements OnInit {

  // Tableau d'objet du mock
  student: Students[] = STUDENTS;

  constructor(private studentService: ListeAbsentsService) {
    
  } 

  ngOnInit(): void {

  }

  // Méthode Aléatoire:

  // 1) préparer la méthode aléatoire, résultat tirage dans la console : ok
  // 2) faire apparaitre le résultat dans le HTML -> document.getElementById("result").innerHTML : ne marche pas
  // 3) si résultat apparait bien dans la zone définie, utiliser les méthodes du services pour ne pas prendre en considération les étudiants absents : non aboutie

  selectedStudent: any;

  public randomSelect() {

    const index = Math.floor(Math.random() * this.student.length);
    this.selectedStudent = this.student[index];
    console.log(this.selectedStudent);
    // this.selectedStudent = document.getElementById("result").innerHTML;

  }


}