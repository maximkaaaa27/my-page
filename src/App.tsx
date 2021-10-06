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
import { Skills } from './pages/Skills';
import { Contacts } from './pages/Contacts';

function App() {


  const [value, setValue] = useState(localStorage.getItem('Language') || 'Rus');
  if (!localStorage.getItem('Language')) localStorage.setItem('Language', 'Rus');

  const handleLanguageChange = (val:string) => {
    setValue(val);
    localStorage.setItem('Language', val);
  };

  return (
    <Router>

     <NavbarComponent
       languageChange={handleLanguageChange}
       language={value}
      />

    <Switch>

      <Route exact path='/'>
        <CardAbout 
          data={about}
          language={value}
          />
      </Route>

      <Route exact path='/skills'>
        <Skills 
          data={about}
          language={value}
        />
      </Route>

      <Route exact path='/contacts'>
        <Contacts />
      </Route>

      </Switch>
      <footer>
        <p id="copyright"> Maksim Dryutov © 2021</p>
      </footer>
    </Router>
  );
};

export default App;
