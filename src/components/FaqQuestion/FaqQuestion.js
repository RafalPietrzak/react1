import React from 'react';
import styles from './FaqQuestion.scss';
import PropTypes from 'prop-types';

const FaqQuestion = (props) => {
  const {question, content} = props;
  return (
    <li className={styles.component}>
      <h3 className={styles.question}>
        {question}
      </h3>
      <p>
        {content}
      </p>
    </li>
  );
};
FaqQuestion.propTypes = {
  question: PropTypes.string,
  content: PropTypes.array,
};

export default FaqQuestion;
