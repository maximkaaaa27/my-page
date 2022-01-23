import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import avaPic from "./ava_img.jpg";


export const Profile = () => {
  return (
    <Row>
      <Col className="border rounded overflow-hidden shadow-sm d-flex">
        <div className="p-2 d-none d-lg-block" >
          <Image alt="ava-pic" src={avaPic} fluid rounded />
        </div>
        <div className="p-3 text-center">
          <h2>Дрютов Максим</h2>
          <h4>Программист. Web-разработчик.</h4>
          <p className="lead">
            Родился и живу в городе Воронеже. С самого детства увлекаюсь радиоконструированием и информатикой. В настоящее время занимаюсь разработкой Web-приложений и компонентов.
          </p>
        </div>
    </Col>
  </Row>
    
  )
}