import React from 'react'
import { Col, Row, Card, Container } from 'react-bootstrap'
import { About } from '../about/about'
import avatar from '../about/avatar.jpg'
import { Contacts } from '../pages/Contacts'
import { Skills } from '../pages/Skills'


type AboutProps = { data: About, language: string, about: string };

export const CardAbout = (props: AboutProps) => {

  const dataCurrentLanguage = (props.language === 'Rus') ? props.data.Rus : props.data.Eng;


  return (
    <Container className="text-center center" fluid>
    <Row className="main-card">
        <Col style={{maxWidth: '15rem'}}>
          <Card style={{ width: '14rem' }}>
            <Card.Img  variant="top" src={avatar} />
            <Card.Body>

              <Card.Title>
                {dataCurrentLanguage.name}
                {' '} 
                {dataCurrentLanguage.lastName}
              </Card.Title>
              
              <Card.Text>
              {dataCurrentLanguage.info}
              </Card.Text>

            </Card.Body>
          </Card>

        </Col>

        <Col>
        <p>{dataCurrentLanguage.about}</p>
        </Col>

        <Col>
        {(props.about === 'skills') ? <Skills language={props.language} data={props.data}/> : <Contacts />}
        </Col>
        
      </Row>
      </Container>
  );
};