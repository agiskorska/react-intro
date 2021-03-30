import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Column from '../Column/ColumnContainer';
// import Creator from '../Creator/Creator.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    columns: PropTypes.array,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }
  render() {
    const {title, image, description, columns} = this.props;

    return (
      <section className={styles.component}>
        <h2 className={styles.subtitle}>
          <Hero titleText={title} imgSource={image} />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
        </h2>
        <div className={styles.columns}>
          {columns.map(columnData=> (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        <div className={styles.creator}>
          {/* <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/> */}
        </div>
      </section>
    );
  }
}

export default List;