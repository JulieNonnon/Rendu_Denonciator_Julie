import { Component, OnInit } from '@angular/core';
import { STUDENTS, Students } from 'src/app/components/mocks/classmates.mock';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ListeAbsentsService } from 'src/app/services/liste-absents.service';


@Component({
  selector: 'app-absents',
  templateUrl: './absents.component.html',
  styleUrls: ['./absents.component.css']
})

export class AbsentsComponent implements OnInit {

  // Tableau de notre mock comprenant la liste des étudiants
  student: Students[] = STUDENTS;
  // Formulaire permettant l'ajout des étudiants absents selectionnés (obligatoire)
  absentForm! : FormGroup;
  // Tableau listant les étudiants séléctionnés comme absents (obligatoire)
  absentStudent!: Students[]; 

  // Constructeur à partir de l'import Formulaire + import service "Liste-Absents"
  constructor(private formBuilder: FormBuilder, private studentService: ListeAbsentsService) {
    
  } 

  // Méthode d'initialisation du composant Angular
    ngOnInit(): void {
      // Initialisation formulaire
      this.initForm()  
      // Récupération de la liste des étudiants absents
      this.absentStudent= this.studentService.getStudent()  
    }

  // Methode pour ajout d'un étudiant dans liste absents
    addElement(){
      // Ajout étudiant absent 
      this.studentService.addStudent(this.absentForm.value.student) 
      // màj liste des étudiants absents
      this.absentStudent= this.studentService.getStudent() // màj liste des étudiants absents
      console.log(this.absentStudent); 
      
      
    }

  // Initialisation du formulaire pour ajouter un étudiant absent
  initForm(){
    this.absentForm= this.formBuilder.group({
      student: null
    })
    
  }

  // Suppression d'un étudiant absent de la liste des absents
  removeElement(idStudent: number): void{
    this.studentService.removeElement(idStudent);
    this.absentStudent= this.studentService.getStudent()
  }

}

