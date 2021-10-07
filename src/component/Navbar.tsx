import React from 'react'
import { Container, Navbar, Nav, ButtonGroup, ToggleButton } from 'react-bootstrap'


type NavbarProps = { 
  languageChange: (val: string) => void;
  aboutMeChange: (val: string) => void; 
  language: string 
}


export const NavbarComponent = (props: NavbarProps) => {

  const navbarNames = {
    Rus: {
      home: 'Домашняя',
      skills: 'Навыки',
      contacts: 'Контакты'
    },
    Eng: {
      home: 'Home',
      skills: 'Skills',
      contacts: 'Contacts'
    }

  }

  

  return (

  <header>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

      <Container fluid>
        <Navbar.Brand href="/">{(props.language === 'Eng') ? navbarNames.Eng.home : navbarNames.Rus.home}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">

      <Nav className="me-auto">



        <Nav.Link onClick={() => props.aboutMeChange('skills')}>{(props.language === 'Eng') ? navbarNames.Eng.skills: navbarNames.Rus.skills}</Nav.Link>

        <Nav.Link onClick={() => props.aboutMeChange('contacts')}>{(props.language === 'Eng') ? navbarNames.Eng.contacts : navbarNames.Rus.contacts}</Nav.Link>

      </Nav>

      <Nav>

        <ButtonGroup>

          <ToggleButton
              id="radio-rus"
              type="radio"
              variant="outline-light"
              name="radio"
              value={props.language}
              checked={props.language === 'Rus'}
              onChange={() => props.languageChange('Rus')}
          > Rus
          </ToggleButton>

          <ToggleButton
              id="radio-eng"
              type="radio"
              variant="outline-light"
              name="radio"
              value={props.language}
              checked={props.language === 'Eng'}
              onChange={() => props.languageChange('Eng')}
          > Eng
          </ToggleButton>

        </ButtonGroup>
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</header>
  );
};