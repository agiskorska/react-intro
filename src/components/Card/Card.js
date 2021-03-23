import React from 'react';
import styles from './Card.scss';
import {settings, listData} from '../../data/dataStore';
import PropTypes from 'prop-types';


class Card extends React.Component {
  static propTypes = {

  }
  static defaultProps = {
  }
  render() {
    console.log(this.props);
    return (
      <section className={styles.component}>
        {this.props.title}
      </section>
    )
  }
}

export default Card;