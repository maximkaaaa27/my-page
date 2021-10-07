import React, {useState} from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { CardAbout } from './component/CardAbout';
import { NavbarComponent } from './component/Navbar';
import { about } from './about/about';

function App() {


  const [language, setLanguage] = useState(localStorage.getItem('Language') || 'Rus');
  const [aboutMe, setAboutMe] = useState('skills');

  if (!localStorage.getItem('Language')) localStorage.setItem('Language', 'Rus');

  const handleLanguageChange = (val:string) => {
    setLanguage(val);
    localStorage.setItem('Language', val);
  };

  const handleAboutMeChange = (val: string) => {
    setAboutMe(val);
  }

  return (
    <Router>

     <NavbarComponent
       languageChange={handleLanguageChange}
       aboutMeChange={handleAboutMeChange}
       language={language}
      />

    <Switch>

      <Route exact path='/'>
        <CardAbout 
          data={about}
          about={aboutMe}
          language={language}
          />
      </Route>

      </Switch>
      <footer>
        <p id="copyright"> Maksim Dryutov © 2021</p>
      </footer>
    </Router>
  );
};

export default App;
