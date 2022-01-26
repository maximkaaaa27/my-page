import React from "react";
import { Card, Col, Row } from "react-bootstrap";

export const Education = () => {
  return (
    <Row xs={1} lg={3}>
      <Col className="py-3">
        <Card style={{ width: '18rem' }} bg="success">
          <Card.Header>Среднее</Card.Header>
          <Card.Body>
            <Card.Title>МБОУ СОШ №11</Card.Title>
            <Card.Text>им.А.С. Пушкина</Card.Text>
            <Card.Text>г.Воронеж, ул. Володарского, д.40</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="py-3">
        <Card style={{ width: '18rem' }} bg='warning'>
        <Card.Header>Высшее</Card.Header>
          <Card.Body>
            <Card.Title>ВГЛТА</Card.Title>
            <Card.Text>Воронежская государственная лесотехническая академия</Card.Text>
            <Card.Text>Воронеж, ул. Тимирязева, 8</Card.Text>
            <Card.Text>+7 (473) 253-78-47</Card.Text>
            <Card.Link href="https://vgltu.ru/">vgltu.ru</Card.Link>
          </Card.Body>
        </Card>     
      </Col>

      <Col className="py-3">
        <Card style={{ width: '18rem' }} bg="info">
        <Card.Header>Дополнительное</Card.Header>
          <Card.Body>
            <Card.Title>ВРЦИСТ</Card.Title>
            <Card.Text>
              Воронежский Региональный Центр Информационных и Социальных Технологий
            </Card.Text>
            <Card.Text> г.Воронеж, ул. Старых Большевиков, д.53А</Card.Text>
            <Card.Link href="http://xn--b1amxffv.xn--p1ai/">ВРЦИСТ</Card.Link>
          </Card.Body>
        </Card>
      </Col>


    
    </Row>
  )
}