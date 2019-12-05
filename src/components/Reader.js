import React from 'react';
import fridayNightJSON from '../data/friday_night';
import Container from "react-bootstrap/Container";
import Sentences from './Sentences';
import Words from './Words';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Reader = () => {

  /******************************
   * INITIALIZATION
   ******************************/
  const sentencesData = fridayNightJSON.friday_night_kiddish.sentences;


  /******************************
   * RENDER METHODS
   ******************************/

  return (
    <div className={'m-5'}>
      <Row>
        <Col sm={{span: 10, offset:1}}>
          <Row>
            <Col>
              <h3>Highlight by sentence</h3>
              <Sentences sentencesData={sentencesData}/>
            </Col>
          </Row>
          <Row className={'mt-5'}>
            <Col>
              <h3>Highlight by word</h3>
              <Words sentencesData={sentencesData}/>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
};

export default Reader;