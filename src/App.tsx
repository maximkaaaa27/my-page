import React, { useContext } from 'react';
import './App.scss';
import { CardAbout } from './components/CardAbout';
import { NavbarComponent } from './components/NavbarComponent';
import { ViewContext } from './context/currentViewContext';

function App() {

  const currentView = useContext(ViewContext);


  return (
    <>
      <NavbarComponent />
      {currentView.render}
      <CardAbout />

      <footer>
        <p id="copyright"> Maksim Dryutov © 2021</p>
      </footer>
      </>
  );
};

export default App;
