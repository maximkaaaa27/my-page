import React, { useContext } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Container } from 'react-bootstrap';
import { ViewContext } from './context/currentViewContext';
import { Footer } from './components/Footer';


function App() {

  const currentView = useContext(ViewContext);

  return (
    <>
      <Header />
        <Container className='mt-5 py-5'>     
            {currentView.render}
        </Container>
      <Footer />
    </>
  );
};

export default App;
