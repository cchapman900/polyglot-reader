import React, {useState} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Sentences = (props) => {

  /******************************
   * INITIALIZATION
   ******************************/

  const [focusedElement, setFocusedElement] = useState(null);


  /******************************
   * HANDLER METHODS
   ******************************/
  function handleHoverOverSentence(event) {
    const selectedElement = event.target.id.split('-');
    setFocusedElement(`${selectedElement[1] === 'transliterated' ? 'hebrew' : 'transliterated'}-${selectedElement[2]}`);
  }


  /******************************
   * RENDER METHODS
   ******************************/

  function renderSentence (sentence, index) {
    return (
      <Row className={'reader'}  key={index}>
        <Col
          className={`text-right ${focusedElement === 'hebrew-'+index ? 'text-info' : ''}`}
          id={`sentence-hebrew-${index}`}
          onMouseOver={handleHoverOverSentence}
        >
          {sentence.hebrew}
        </Col>
        <Col className={`text-left ${focusedElement === 'transliterated-'+index ? 'text-primary' : ''}`}
             id={`sentence-transliterated-${index}`}
             onMouseOver={handleHoverOverSentence}
        >
          {sentence.transliterated}
        </Col>
      </Row>
    )
  }

  function renderSentences () {
    let sentences = [];

    for (let i = 0; i < props.sentencesData.length; i++) {
      sentences.push(renderSentence(props.sentencesData[i], i));
    }

    return sentences;
  }

  return (
    renderSentences()
  )

};


export default Sentences;