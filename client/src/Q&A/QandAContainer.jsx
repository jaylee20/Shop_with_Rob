import React from 'react';
import QandAItem from './QandAItem.jsx';

const QandAContainer = ({ questions, productName, counter }) => {
  const sortedQuestions = questions;
  sortedQuestions.sort((a, b) => (a.helpfulness > b.helpfulness));

  const limitQuestions = sortedQuestions.slice(0, counter);

  return (
    <div>
      {limitQuestions.map((question, index) => (
        <QandAItem key={index} questions={question} productName={productName} />
      ))}
    </div>
  );
};

export default QandAContainer;
