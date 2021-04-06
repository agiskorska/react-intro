import React from 'react';
import PropTypes from 'prop-types';
import styles from './FAQ.scss';
import ReactHtmlParser from 'react-html-parser';
import {listData, faq} from '../../data/dataStore';
import Hero from '../Hero/Hero';
import Container from '../Container/Container';

class FAQ extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.string,
    header: PropTypes.string,
  }

  static defaultProps = {
    title: listData.title,
    image: listData.image,
    content: faq.content,
    header: faq.header,
  }

  render () {
    const {title, image, content, header} = this.props;
    return (
      <Container>
        <h2 className={styles.title}>{header}</h2>
        <Hero titleText={title} imgSource={image} />
        <div>{ReactHtmlParser(content)}</div>
      </Container>
    );
  }
}

export default FAQ;