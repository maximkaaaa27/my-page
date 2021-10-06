export type About = {

    Rus: {
      name: string;
      lastName: string;
      age: string;
      info: string;
      mainSkills: string[];
      otherSkills: string[];
    };

    Eng: {
      name: string;
      lastName: string;
      age: string;
      info: string;
      mainSkills: string[];
      otherSkills: string[];

    }



};




export const about = {

  Rus: {
    name: 'Максим',
    lastName: 'Дрютов',
    age: '30',
    info: 'Фронтенд Разработчик',
    mainSkills: ['JavaScript','TypeScript', 'React', 'Redux', 'HTML5', 'CSS', 'SCSS', 'Bootstrap'],
    otherSkills: ['MVC', 'OOP', 'Flux', 'Common LISP', 'Delphy', 'Git', 'Linux', 'MongoDB', 'ExpressJS', 'Node']
  },

  Eng: {
    name: 'Maksim',
    lastName: 'Dryutov',
    age: '30',
    info: 'Frontend Developer',
    mainSkills: ['JavaScript','TypeScript', 'React', 'Redux', 'HTML5', 'CSS', 'SCSS', 'Bootstrap'],
    otherSkills: ['MVC', 'OOP', 'Flux', 'Common LISP', 'Delphy', 'Git', 'Linux', 'MongoDB', 'ExpressJS', 'Node']
  }

}