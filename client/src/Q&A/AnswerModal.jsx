/* eslint-disable no-alert */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-shorthand */
import React, { useState } from 'react';
import axios from 'axios';
import * as R from './modalStyle.jsx'

const AnswerModal = ({
  show, onClose, questionId, question, productName,
}) => {
  const [answerBody, setAnswerBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [invalidEmail, setInvalidEmail] = useState(false);
  // const [photos, setPhotos] = useState([]);

  // const checkEmail = () => {
  //   if (email.indexOf('@') > email.indexOf('.')) {
  //     setInvalidEmail(true);
  //   }
  // };

  const submitAnswer = () => (
    axios.post(`/api/qa/questions/${questionId}/answers`, {
      body: answerBody,
      name: name,
      email: email,
    }, {
      params: {
        question_id: questionId,
      },
    })
      .then(onClose)
  );

  const checkForm = () => {
    // checkEmail();
    if (answerBody === '' || name === '' || email === '') {
      window.alert('Missing mandatory field. Please make sure all fields are filled.');
    } else {
      submitAnswer();
    }
  };

  const handleAnswerBody = (event) => {
    setAnswerBody(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  if (!show) {
    return null;
  }

  return (
    <R.AddQuestionContainer show={show}>
      <R.Content>
        <div className="answerModal">
          <div>
            <h2>Submit Your Answer</h2>
            <div>
              <h3>[{productName}]: [{question}]</h3>
            </div>
          </div>
          <div className="answer">
            <form>
              Your Answer (1000 char)*
              <br />
              <input maxLength="1000" onChange={handleAnswerBody} />
            </form>
          </div>
          <div className="nickname">
            <form>
              What is your nickname (60 char)*
              <br />
              <input placeholder="jack543!!" maxLength="60" onChange={handleName} />
              <br />
              For privacy reasons, do not use your full name or email address.
            </form>
          </div>
          <div className="email">
            <form>
              Your e-mail*
              <br />
              <input placeholder="jack@email.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={handleEmail} />
              <br />
              For authentication reasons, you will not be emailed.
            </form>
          </div>
          {/* <button type="submit">Upload Your Photos</button> */}
          <br />
          <button type="submit" onClick={checkForm}>Submit Answer</button>
          <button type="submit" onClick={onClose}>Close</button>
        </div>
      </R.Content>
    </R.AddQuestionContainer>
  );
};

export default AnswerModal;
