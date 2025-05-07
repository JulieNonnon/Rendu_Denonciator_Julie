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
  
  public getStudent(): Students[] { // typer le retour pour plus de claireté

    const stored = localStorage.getItem("student");

    if(stored) {
      // changer le type string en type objet avec JSON.parse
      return JSON.parse(stored);
    } else {
      // création nouvelle liste si aucune n'existe
      this.createStudent(); 
      return this.getStudent(); // penser au return sinon risque d'un undefined
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

  private saveStudent(student: Students[]) {

    localStorage.setItem('student', JSON.stringify(student));
    
  }

  // 4) ADDSTUDENT:
  // Ajout étudiant absent à la liste

  public addStudent(absentStudent: Students){

     // Récupérer liste étudiants absents
    const students= this.getStudent() 
    // Vérification si étudiant dans liste absents
    const existingStudent= students.find((student: Students) => student.id==absentStudent.id);
    if (existingStudent) {
      // Si étudiant est déjà dans la liste absents, message dans localStorage
      console.log("Etudiant déjà renseigné absent"); 
    }
    else {
    // Si étudiant absent, ajout à la liste absents  
      students.push(absentStudent) 
    }
    // màj de la nouvelle liste
    this.saveStudent(students) 
  }

  // 5) REMOVEELEMENT:
  // Sauvegarde de la nouvelle liste

  public removeElement(index: number){

    // Récupérer la liste des étudiants absents
    const students= this.getStudent()
    // Slice pour retirer l'étudiant de la liste (selon son indice)
    students.splice(index, 1) 
    // Màj de la nouvelle liste
    this.saveStudent(students);  
  }

  // 6) Booleen si l'étudiant est absent
  public estAbsent(student: Students): boolean {
    const absents = this.getStudent(); // absents est un tableau de type Students[], a représente un étudiant dans la liste des absents.
    return absents?.some((a: Students) => a.id === student.id); // some(...) parcourt chaque étudiant a du tableau absents, et on vérifie si l’un des absents a le même id que celui qu’on teste. Si au moins un match existe, .some() retourne true, donc l'étudiant est absent.
  }
}
