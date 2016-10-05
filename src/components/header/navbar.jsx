import React, {Component} from 'react'
import { Link } from 'react-router';
import classnames from 'classnames/bind';
import styles from './navbar.css';

let cx = classnames.bind(styles);


export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = { activeRoute: '/' }
    this.select = this.select.bind(this);
  }

  select( href ) {
    let route = href.substr( href.lastIndexOf('/') );
    this.setState({ activeRoute: route });
  }

  render() {
    let current = this.state.activeRoute;
    return <div className={ styles.navbar }
      onClick={ (e) => this.select(e.target.href) } >
      <NavLink route='/' active={current} >programs</NavLink>
      <NavLink route='/custom' active={current}>my schedule</NavLink>
      <NavLink route='/profile' active={current}>profile</NavLink>
    </div>
  }
  
}

const NavLink = (props) => (
  <Link to={props.route} 
    className={ cx('navlink',{'selected': props.active === props.route}) >
    {props.children}
  </Link>
);
