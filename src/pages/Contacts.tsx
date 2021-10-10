import React from "react";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Accordion, ListGroup, Image, Nav } from "react-bootstrap";
import logoMail from '../logo/mail_logo.svg'
import logoSkype from '../logo/skype_logo.png'
import logoLinkedin from '../logo/linkedin_logo.svg'
import logoGitHub from '../logo/gitHub_logo.png'


type CustomToggleTypes = {
  children: string,
  eventKey: string,
  logo: string
}

function CustomToggle({ children, eventKey, logo }: CustomToggleTypes) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <Nav.Link onClick={decoratedOnClick}>
    <Image className="contacts-logo" src={logo} rounded />
    </Nav.Link>
  );
}

export const Contacts = () => {


  return (
    <Accordion>
    <ListGroup variant="flush">

      <ListGroup.Item>
        <CustomToggle eventKey="0" logo={logoGitHub}>GitHub</CustomToggle>
          <Accordion.Collapse eventKey="0">
            <Nav.Link href="https://github.com/maximkaaaa27" style={{color: 'black'}}> Перейти </Nav.Link>
          </Accordion.Collapse>
      </ListGroup.Item>

      <ListGroup.Item>
        <CustomToggle eventKey="1" logo={logoSkype}>Skype</CustomToggle>
          <Accordion.Collapse eventKey="1">
            <Nav.Link href="https://join.skype.com/invite/Fok6RHsaFsfz">Добавиться в Скайп</Nav.Link>
          </Accordion.Collapse>    
      </ListGroup.Item>

      <ListGroup.Item>
        <CustomToggle eventKey="2" logo={logoMail}>My mail</CustomToggle>
          <Accordion.Collapse eventKey="2">
              <p style={{color: 'blue', fontSize: '18px'}}>max_005_27@mail.ru</p>
          </Accordion.Collapse>
      </ListGroup.Item>




      <ListGroup.Item>
        <CustomToggle eventKey="3" logo={logoLinkedin}>LinkedIn</CustomToggle>
          <Accordion.Collapse eventKey="3">
            <Nav.Link href="https://www.linkedin.com/in/maksim-dryutov/">Перейти в мой профиль</Nav.Link>
          </Accordion.Collapse>
      </ListGroup.Item>
      
      
    </ListGroup>
    </Accordion>
  )
}
