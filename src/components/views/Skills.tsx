import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import jslogo from '../../logo/html_css_js_logo.png';
import tslogo from '../../logo/TypeScript_Logo.svg';
import reactlogo from '../../logo/react-logo.svg';
import reduxlogo from '../../logo/Redux_Logo.png';
import nodeJslogo from '../../logo/node.js_logo.svg';
import firebaselogo from '../../logo/firebase_logo.svg';
import mongodblogo from '../../logo/mongoDB_logo.svg';
import expresslogo from '../../logo/expressjs_logo.png';
import lisplogo from '../../logo/lisp-logo.jpg';
import delphilogo from '../../logo/delphi-logo.jpg';

export const Skills = () => {
  return (
  <>
    <div className="mb-4 bg-light rounded-3 d-flex flex-column align-items-center">
      <div className="display-5 fw-bold my-4">
        Основные
      </div>
        <Image rounded src={jslogo} className="w-50 pb-3 " />
        <Image rounded src={tslogo} className="w-50 pb-3 " />
        <Image rounded src={reactlogo} className="w-50 pb-3 " />
        <Image rounded src={reduxlogo} className="w-50 pb-3 " />
    </div>
    <Row xs={1} lg={2}>
      <Col>
        <div className="md-6 bg-light rounded-3">
        <div className="display-6 fw-bold my-4 text-center">
        Не менее важные
        </div>
        <Image rounded src={nodeJslogo} className="w-50 pb-3 " />
        <Image rounded src={expresslogo} className="w-50 pb-3 " />
        <Image rounded src={firebaselogo} className="w-50 pb-3 " />
        <Image rounded src={mongodblogo} className="w-50 pb-3 " />
        </div>
      </Col>
      <Col>
      <div className="md-6 bg-light rounded-3">
        <div className="display-6 fw-bold my-4 text-center">
        Остались в сердце
      </div>
        <Image rounded src={delphilogo} className="w-50 pb-3 " />
        <Image rounded src={lisplogo} className="w-50 pb-3 " />
        </div>
      </Col>

    </Row>
  </>
  )
}