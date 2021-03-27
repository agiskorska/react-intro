import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  }
  static defaultProps = {
  }
  render() {
    console.log(this.props);
    return (
      <section className={styles.component}>
        {this.props.title}
      </section>
    );
  }
}

export default Card;