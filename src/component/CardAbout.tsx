import React from 'react'
import { Col, Row, Card, Container } from 'react-bootstrap'
import { About } from '../about/about'
import avatar from '../about/avatar.jpg'


type AboutProps = { data: About, language: string }

export const CardAbout = (props: AboutProps) => {


  return (
    <Container className="text-center center" fluid>
    <Row className="main-card">
        <Col>
          <Card style={{ width: '14rem' }}>
            <Card.Img  variant="top" src={avatar} />
            <Card.Body>

              <Card.Title>
                {(props.language === 'Rus') ? props.data.Rus.name : props.data.Eng.name}
                {' '} 
                {(props.language === 'Rus') ? props.data.Rus.lastName : props.data.Eng.lastName}
              </Card.Title>
              
              <Card.Text>
              {(props.language === 'Rus') ? props.data.Rus.info : props.data.Eng.info}
              </Card.Text>

            </Card.Body>
          </Card>

        </Col>

        <Col>
          <p>About</p>
        </Col>
        
      </Row>
      </Container>
  )
}