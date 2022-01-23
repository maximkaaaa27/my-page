import React, { useContext } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { ViewContext } from '../context/currentViewContext'


export const NavbarComponent = () => {

const currentView = useContext(ViewContext);

const handleSelect = (eventSelect: string | null) => {
  const eventKey = !eventSelect ? 'has no eventKey' : eventSelect
  currentView.dispatchView({type: eventKey})
}



  return (
    <header className='p-2 bg-light'>
      <Navbar collapseOnSelect expand='lg'>
        <Navbar.Toggle aria-controls='responsive-nav' />
        <Navbar.Collapse id='responsive-nav'>
          <Nav defaultActiveKey="profile" onSelect={(eventSelect) => handleSelect(eventSelect)}>
            <Nav.Item>
              <Nav.Link eventKey="profile" >Профиль</Nav.Link>
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
    </header>
  )
}