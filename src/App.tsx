import React, { useContext } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { ViewContext } from './context/currentViewContext';
import { Footer } from './components/Footer';
import { Container } from 'react-bootstrap';


function App() {

  const currentView = useContext(ViewContext);

  return (
    <>
      <Header />
      <Container className='mt-5 p-5'>     
          {currentView.render}
      </Container>
      <Footer />
    </>
  );
};

export default App;
