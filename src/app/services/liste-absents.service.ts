import { Injectable } from '@angular/core';
import { STUDENTS, Students } from 'src/app/components/mocks/classmates.mock';

// SERVICE GESTION DES ABSENCES (-> méthodes utilisées: cf mise en place service panier)

@Injectable({
  providedIn: 'root'
})
export class ListeAbsentsService {

  constructor() { }

  // 1) GETSTUDENT: 
  //Récupéreration de la liste des étudiants absents enregistrée en local
  
  public getStudent() {

    const student = localStorage.getItem("student");

    if(student) {
      // changer le type string en type objet avec JSON.parse
      return JSON.parse(student);
    } else {
      // création nouvelle liste si aucune n'existe
      this.createStudent(); 
      this.getStudent(); 
    }

  }

  // 2) CREATESTUDENT:
  //Création nouvelle liste d'étudiants absents (vide au lancement)

  private createStudent() {

    // changer le type objet en type string avec JSON.stringify
    const newStudent = JSON.stringify([]);
    localStorage.setItem('student', newStudent);

  }

  // 3) SAVESTUDENT:
  // Sauvegarde liste d'étudiants absents en local

  private saveStudent(student: Students) {

    localStorage.setItem('student', JSON.stringify(student));
    
  }

  // 4) ADDSTUDENT:
  // Ajout étudiant absent à la liste

  public addStudent(absentStudent: Students){

     // Récupérer liste étudiants absents
    const student= this.getStudent() 
    // Vérification si étudiant dans liste absents
    const existingStudent= student.find((student: Students) => student.id==absentStudent.id);
    if (existingStudent) {
      // Si étudiant est déjà dans la liste absents, message dans localStorage
      console.log("Etudiant déjà renseigné absent"); 
    }
    else {
    // Si étudiant absent, ajout à la liste absents  
      student.push(absentStudent) 
    }
    // màj de la nouvelle liste
    this.saveStudent(student) 
  }

  // 5) REMOVEELEMENT:
  // Sauvegarde de la nouvelle liste

  public removeElement(idStudent: number){

    // Récupérer la liste des étudiants absents
    const student= this.getStudent()
    // Slice pour retirer l'étudiant de la liste (selon son indice)
    student.splice(idStudent, 1) 
    // Màj de la nouvelle liste
    this.saveStudent(student);  
  }


}
