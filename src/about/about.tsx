export interface IAbout {
  Rus: {
    name: string;
    lastName: string;
    age: string;
    about: string;
    info: string;
  };

  Eng: {
    name: string;
    lastName: string;
    age: string;
    about: string;
    info: string;
  };

  Skills: {
    mainSkills: string[];
    otherSkills: string[];
  };
}




export const about: IAbout = {

  Rus: {
    name: 'Максим',
    lastName: 'Дрютов',
    age: '30',
    about: 'Родился и живу в городе Воронеж. С самого детства увлекаюсь радиоконструированием и информатикой. Первую компьютерную программу написал на компьютере БК0010-01 в 14 лет. В настоящее время занимаюсь Фронтенд разработкой Web-сайтов и приложений.',
    info: 'Фронтенд Разработчик'
  },

  Eng: {
    name: 'Maksim',
    lastName: 'Dryutov',
    age: '30',
    about: 'I was born and live in the city of Voronezh. Since childhood I have been fond of radio engineering and computer science. I wrote the first computer program on a computer BK0010-01 at the age of 14. Currently I am engaged in Front-end development of Web sites and applications.',
    info: 'Frontend Developer'
  },

  Skills: {
    mainSkills: ['JavaScript','TypeScript', 'React', 'Redux', 'Flux', 'HTML5', 'CSS', 'SCSS', 'Bootstrap'],
    otherSkills: ['MVC', 'OOP',  'Git', 'Linux', 'MongoDB', 'ExpressJS', 'Node', 'Delphi', 'Common LISP']
  }



};