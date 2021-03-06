import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';


const Info = (props) => {
  const {title, image, content} = props;  
  return (
    <Container>
      <Hero titleText={title} image={image} />
      <p>{content}</p>
    </Container>
  );
};

Info.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string,
};

export default Info;