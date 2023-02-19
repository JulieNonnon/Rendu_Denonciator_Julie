export type ClassmatesGender = 'male'|'female'
export type ClassmatesMessage = 'Tu es le grand gagnant !'|'Tu es la grande gagnante !'

// mise en place interface "Students"
export interface Students {
    id:number;
    firstname: string;
    gender: ClassmatesGender; // défini ci dessus avec male & female
    genderMessage: ClassmatesMessage; // défini ci dessus avec 'Tu es le grand gagnant !' & 'Tu es la grande gagnante !'

}

// mise en place tableau d'objets "STUDENTS" construit avec l'interface "Students"
export const STUDENTS: Students[] = [

    {
    id:1,
    firstname: 'Fahed',
    gender: "male",
    genderMessage: "Tu es le grand gagnant !",
    },

    {
    id:2,
    firstname: 'Erdal',
    gender: "male",
    genderMessage: "Tu es le grand gagnant !",
    },

    {
    id:3,
    firstname: 'Clara',
    gender: "female",
    genderMessage: "Tu es la grande gagnante !",
    },

    {
    id:4,
    firstname: 'Diambéré',
    gender: "female",
    genderMessage: "Tu es la grande gagnante !",
    },

    {
    id:5,
    firstname: 'Morgane',
    gender: "female",
    genderMessage: "Tu es la grande gagnante !",
    },

    {
    id:6,
    firstname: 'Hazar',
    gender: "female",
    genderMessage: "Tu es la grande gagnante !",
    },

    {
    id:7,
    firstname: 'Anne',
    gender: "female",
    genderMessage: "Tu es la grande gagnante !"
    },

    {
    id:8,
    firstname: 'Jiyun',
    gender: "female",
    genderMessage: "Tu es la grande gagnante !",
    },

    {
    id:9,
    firstname: 'Lilianna',
    gender: "female",
    genderMessage: "Tu es la grande gagnante !",
    },

    {
    id:10,
    firstname: 'Kanzia',
    gender: "female",
    genderMessage: "Tu es la grande gagnante !",
    },

    {
    id:11,
    firstname: 'Thomas',
    gender: "male",
    genderMessage: "Tu es le grand gagnant !",
    },

    {
    id:12,
    firstname: 'Christelle',
    gender: "female",
    genderMessage: "Tu es la grande gagnante !",
    },

    {
    id:14,
    firstname: 'Assa',
    gender: "female",
    genderMessage: "Tu es la grande gagnante !",
    },

    {
    id:14,
    firstname: 'Fama',
    gender: "female",
    genderMessage: "Tu es la grande gagnante !",
    },

    {
    id:15,
    firstname: 'Julie',
    gender: "female",
    genderMessage: "Tu es la grande gagnante !",
    },

    {
    id:16,
    firstname: 'Cynthia',
    gender: "female",
    genderMessage: "Tu es la grande gagnante !",
    },

    {
    id:17,
    firstname: 'Jérôme',
    gender: "male",
    genderMessage: "Tu es le grand gagnant !",
    },

    {
    id:18,
    firstname: 'Katia',
    gender: "female",
    genderMessage: "Tu es la grande gagnante !",
    }
]