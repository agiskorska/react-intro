import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    imageSource: PropTypes.string.isRequired,
    children: PropTypes.node,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>
  }
  render() {
    console.log(this.props);
    return (
      <section className={styles.component}>
        <h2 className={styles.subtitle}><Hero titleText={this.props.title} imgSource={this.props.imageSource} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        </h2>
        <div className={styles.columns}>
          <Column title={'Aninmals'}/>
          <Column title={'Minerals'}/>
          <Column title={'Plants'}/>
        </div>
      </section>
    )
  }
}

export default List;