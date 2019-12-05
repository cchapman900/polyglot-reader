import React, {useState} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Words = (props) => {

  /******************************
   * INITIALIZATION
   ******************************/

  const [focusedWord, setFocusedWord] = useState(null);


  /******************************
   * HANDLER METHODS
   ******************************/
  function handleHoverOverWord(event) {
    const selectedElement = event.target.id.split('-');
    setFocusedWord(`${selectedElement[1] === 'transliterated' ? 'hebrew' : 'transliterated'}-${selectedElement[2]}-${selectedElement[3]}`);
  }


  /******************************
   * RENDER METHODS
   ******************************/

  function renderWords (sentence, index, mode) {
    let words = [];
    for (let i = 0; i < sentence.words.length; i++) {
      const activeColor = mode === 'hebrew' ? 'text-info' : 'text-primary'
      const elementClass = focusedWord === `${mode}-${index}-${i}` ? `${activeColor}` : '';
      words.push(
        <span
          className={`text-left ${elementClass}`}
          key={`word-${mode}-${index}-${i}`}
          id={`word-${mode}-${index}-${i}`}
          onMouseOver={handleHoverOverWord}
        >
          {sentence.words[i][mode] + ' '}
        </span>
      );
    }
    return words;
  }

  function renderSentences () {
    let sentences = [];
    for (let i = 0; i < props.sentencesData.length; i++) {
      const sentence = (
        <Row key={`words-${i}`}>
          <Col className={'text-right'}>{renderWords(props.sentencesData[i], i, 'hebrew')}</Col>
          <Col className={'text-left'}>{renderWords(props.sentencesData[i], i, 'transliterated')}</Col>
        </Row>
      );
      sentences.push(sentence);
    }
    return sentences
  }

  return (
    renderSentences()
  )

};


export default Words;