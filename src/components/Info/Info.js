import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import styles from './Info.scss';
import {listData, info} from '../../data/dataStore';
import Hero from '../Hero/Hero';

class Info extends React.Component {
  static propTypes = {
    description: PropTypes.string,
    header: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
  }
  static defaultProps = {
    header: info.header,
    description: info.content,
    title: listData.title,
    image: listData.image,
  }

  render () {
    const {description, header, title, image} = this.props;
    return (
      <Container className={styles.component}>
        <h2 className={styles.title}>{header}</h2>
        <Hero titleText={title} imgSource={image} />
        <p>{description}</p>
      </Container>
    );
  }
}



export default Info;
