import {connect} from 'react-redux';
import Faq from './Faq';

const mapStateToProps = state => ({
  title: state.faq.title,
  image: state.faq.image,
  content: state.faq.content,
});

export default connect(mapStateToProps)(Faq);