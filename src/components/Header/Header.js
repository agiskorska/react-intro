import React from 'react';
import PropTypes from 'prop-types';
import {settings, info, faq} from '../../data/dataStore';
import {NavLink, Link} from 'react-router-dom';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import Search from '../Search/SearchContainer';
import styles from './Header.scss';

class Header extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    home: PropTypes.string,
    info: PropTypes.string, 
    faq: PropTypes.string,
  }
  static defaultProps = {
    icon: settings.defaultLinkIcon,
    home: settings.defaultHomeTitle,
    info: info.header,
    faq: faq.header,
  }
  render() {
    const {icon, faq, info, home} = this.props;

    return (
      <header className= {styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={icon} />
            </Link>
            <nav>
              <Search />
              <NavLink exact to='/' activeClassName='active'>{home}</NavLink>
              <NavLink exact to='/info' activeClassName='active'>{info}</NavLink>
              <NavLink exact to='/FAQ' activeClassName='active'>{faq}</NavLink>
            </nav> 
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;