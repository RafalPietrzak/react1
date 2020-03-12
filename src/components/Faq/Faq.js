import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import FagQuestion from '../FaqQuestion/FaqQuestion';

const Faq = props => {
  const {title, image, content} = props;  
  return (
    <Container>
      <Hero titleText={title} image={image} />
      <ul>
        {content.map(faqData => (
          <FagQuestion key={faqData.key} {...faqData} /> 
        ))}
      </ul>
    </Container>
  );
};

Faq.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.array,
};

export default Faq;