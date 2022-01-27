import React, { useContext } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { useIcons } from '../assets/icons';
import { ViewContext } from '../context/currentViewContext'


export const NavbarComponent = () => {

const currentView = useContext(ViewContext);
const person = useIcons('person');

const handleSelect = (eventSelect: string | null) => {
  const eventKey = !eventSelect ? 'has no eventKey' : eventSelect
  currentView.dispatchView({type: eventKey})
}



  return (
      <Navbar collapseOnSelect expand='lg' bg='light' fixed="top">
        <Navbar.Toggle aria-controls='responsive-nav'  className="m-2"/>
        <Navbar.Collapse id='responsive-nav' className="p-2">
          <Nav defaultActiveKey="profile" onSelect={(eventSelect) => handleSelect(eventSelect)}>
            <Nav.Item>
              <Nav.Link eventKey="profile">{person}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="skills">Навыки</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="education">Образование</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="experience">Опыт работы</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="contacts">Контакты</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

  )
}