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

  selectedStudent: Students | null = null; // mieux que any

  public randomSelect() {

    const presentStudents = this.student.filter(s => 
      !this.studentService.estAbsent(s) 
    );
  
    if (presentStudents.length === 0) {
      this.selectedStudent = null;
      alert("Aucun étudiant présent !");
      return;
    }

    const index = Math.floor(Math.random() * presentStudents.length);
    this.selectedStudent = presentStudents[index];
    console.log("Etudiant sélectionné : ", this.selectedStudent);
  }

  // garde l'étudiant s seulement s’il n’est pas absent.
  // this.student est la liste complète des étudiants (présents et absents) 
  // s représente chaque étudiant de this.student
  // .filter(...) sert à garder uniquement ceux pour lesquels la fonction retourne true. 
}